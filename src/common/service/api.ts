import { AuthEndpointSet } from './endpoint';
import { JWT, TOKEN_STATUS } from './jwt';
import { Uri } from './uri';

type RequestProps = {
  endpointSet: {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    permission: 'private' | 'public';
    path: string;
  };
  pathVariables?: Record<string, string | number> | null;
  body?: Record<string, unknown> | FormData;
  queryParams?: Record<string, string | number> | null;
  init?: RequestInit;
};

type GetProps = Omit<RequestProps, 'body'>;

type PostProps = RequestProps;

type PutProps = RequestProps;

type PatchProps = RequestProps;

type DeleteProps = Omit<RequestProps, 'body'>;

type ErrorResponseConstructorProps = {
  status: number;
  customErrorCode: string;
  message: string | string[];
  timestamp: string;
};

export class ErrorResponse extends Error {
  readonly status: number;
  readonly customErrorCode: string = '';
  readonly messages: string | string[] = '';
  readonly timestamp: string = '';

  constructor({
    status,
    customErrorCode,
    message,
    timestamp,
  }: ErrorResponseConstructorProps) {
    super(customErrorCode);

    this.status = status;
    this.customErrorCode = customErrorCode;
    this.messages = message;
    this.timestamp = timestamp;
  }
}

class APIClient {
  private isDuringRenewalRefreshToken = false;
  private queuedPromises: (() => void)[] = [];

  constructor() {
    return;
  }

  public get<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    init,
  }: GetProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: 'GET',
      },
    });
  }

  public post<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    body,
    init,
  }: PostProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: 'POST',
      },
      body,
    });
  }

  public delete<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    init,
  }: DeleteProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: 'DELETE',
      },
    });
  }

  public put<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    body,
    init,
  }: PutProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: 'PUT',
      },
      body,
    });
  }

  public patch<TResponse = unknown>({
    endpointSet,
    queryParams,
    pathVariables,
    body,
    init,
  }: PatchProps) {
    return this.request<TResponse>({
      endpointSet,
      queryParams,
      pathVariables,
      init: {
        ...init,
        method: 'PATCH',
      },
      body,
    });
  }

  /**
   * @NOTE
   * 대기중인 요청들을 모두 실행하고 queue를 비웁니다.
   */
  private flushWaitingPromises() {
    this.queuedPromises.forEach((resolve) => resolve());
    this.queuedPromises = [];
  }

  /**
   * @NOTE
   * fetch를 사용한 실제 request
   */
  private async request<TResponse>({
    endpointSet,
    body,
    queryParams,
    pathVariables,
    init,
  }: RequestProps): Promise<TResponse> {
    const header: Record<string, string> = {};

    if (endpointSet.permission === 'private') {
      const accessToken = JWT.getAccessToken();

      /**
       * @NOTE
       * access token 유효성 체크
       */
      const [tokenStatus] = JWT.validateToken(accessToken);

      if (tokenStatus === TOKEN_STATUS.INVALID) {
        JWT.removeAccessToken();

        /**
         * @NOTE
         * access token이 유효하지 않다면 refresh 후 요청
         */
        return this.refreshAndContinue<TResponse>({
          endpointSet,
          body,
          queryParams,
          pathVariables,
          init,
        });
      } else {
        /**
         * @NOTE
         * access token이 유효해서 요청을 보낼 수 있는 경우
         */
        header['Authorization'] = `Bearer ${accessToken}`;
      }
    }

    if (body) {
      if (body instanceof FormData) {
        delete header['Content-Type'];
      } else {
        header['Content-Type'] = 'application/json';
      }
    }

    const requestUrl = Uri.buildUrl({
      path: endpointSet.path,
      pathVariables,
      queryParams,
    });

    const response = await fetch(requestUrl, {
      ...init,
      method: endpointSet.method,
      headers: header,
      body: this.prepareBody(body),
    });

    /**
     * @NOTE
     * 204 body가 없는 경우 json parsing을 할 수 없음
     */
    if (response.status === 204) {
      return {} as TResponse;
    }

    const responseData = await response.json();

    if (!response.ok) {
      throw new ErrorResponse({
        status: response.status,
        customErrorCode: responseData.customErrorCode,
        message: responseData.message,
        timestamp: responseData.timestamp,
      });
    }

    return responseData as TResponse;
  }

  private async refreshAndContinue<TResponse>({
    endpointSet,
    body,
    queryParams,
    pathVariables,
    init,
  }: RequestProps): Promise<TResponse> {
    const storedRefreshToken = JWT.getRefreshToken();
    const [tokenStatus] = JWT.validateToken(storedRefreshToken);

    /**
     * @NOTE
     * refresh token 유효성 체크
     */
    if (tokenStatus === TOKEN_STATUS.INVALID) {
      JWT.removeRefreshToken();
      throw new ErrorResponse({
        status: 401,
        customErrorCode: '',
        message: 'INVALID_TOKEN',
        timestamp: new Date().toUTCString(),
      });
    }

    /**
     * @NOTE
     * 현재 token refresh 중인 경우 대기열에 추가
     */
    if (this.isDuringRenewalRefreshToken) {
      return new Promise((resolve) => {
        this.queuedPromises.push(() => {
          resolve(
            this.request<TResponse>({
              endpointSet,
              body,
              queryParams,
              pathVariables,
              init,
            }),
          );
        });
      });
    }

    this.isDuringRenewalRefreshToken = true;

    /**
     * @NOTE
     * 실제 Refresh Token 요청
     */
    const response = await fetch(
      Uri.buildUrl({
        path: AuthEndpointSet.auth.refreshTokens.path,
      }),
      {
        headers: {
          Authorization: `Bearer ${storedRefreshToken}`,
        },
      },
    );

    /**
     * @NOTE
     * refresh가 실패했을 경우 처리
     */

    if (!response.ok) {
      throw new ErrorResponse({
        status: 401,
        customErrorCode: '',
        message: 'INVALID_TOKEN',
        timestamp: new Date().toUTCString(),
      });
    }

    const responseData: {
      data: {
        accessToken: string;
        refreshToken: string;
      };
    } = await response.json();

    /**
     * @NOTE
     * refresh가 성공했을 경우 처리
     */
    const {
      data: { accessToken, refreshToken },
    } = responseData;

    this.isDuringRenewalRefreshToken = false;
    JWT.setAccessToken(accessToken);
    JWT.setRefreshToken(refreshToken);

    /**
     * @NOTE
     * 원래 요청 진행
     */
    return this.request<TResponse>({
      endpointSet,
      body,
      queryParams,
      pathVariables,
      init,
    }).then(() => {
      this.flushWaitingPromises();
    }) as Promise<TResponse>;
  }

  private prepareBody(
    body?: Record<string, unknown> | FormData,
  ): BodyInit | null {
    if (!body) {
      return null;
    }
    if (body instanceof FormData) {
      return body;
    }
    return JSON.stringify(body);
  }
}

export const api = new APIClient();
