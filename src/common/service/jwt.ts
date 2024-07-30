import { jwtDecode } from 'jwt-decode';

enum TOKEN_TYPE {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export enum TOKEN_STATUS {
  VALID = 'VALID',
  INVALID = 'INVALID',
  EXPIRED = 'EXPIRED',
}

type BaseTokenPayload = {
  iss: string;
  sub: string;
  userOauthId: string;
  name: string;
  iat: number;
  exp: number;
};

export type AccessTokenPayload = BaseTokenPayload & {
  userId: string;
};

export type RefreshTokenPayload = BaseTokenPayload;

export class JWT {
  private constructor() {
    return;
  }

  private static checkClientSide() {
    if (typeof window === 'undefined') {
      throw new Error('클라이언트 환경에서만 사용 가능합니다.');
    }
  }

  public static setCredentials({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) {
    JWT.setAccessToken(accessToken);
    JWT.setRefreshToken(refreshToken);
  }

  public static setAccessToken(token: string) {
    JWT.checkClientSide();

    localStorage.setItem(TOKEN_TYPE.ACCESS_TOKEN, token);
  }

  public static getAccessToken() {
    JWT.checkClientSide();

    return localStorage.getItem(TOKEN_TYPE.ACCESS_TOKEN);
  }

  public static removeAccessToken() {
    JWT.checkClientSide();

    return localStorage.removeItem(TOKEN_TYPE.ACCESS_TOKEN);
  }

  public static setRefreshToken(token: string) {
    JWT.checkClientSide();

    localStorage.setItem(TOKEN_TYPE.REFRESH_TOKEN, token);
  }

  public static getRefreshToken() {
    JWT.checkClientSide();

    return localStorage.getItem(TOKEN_TYPE.REFRESH_TOKEN);
  }

  public static removeRefreshToken() {
    JWT.checkClientSide();

    localStorage.removeItem(TOKEN_TYPE.REFRESH_TOKEN);
  }

  static isValid(token: string) {
    try {
      const decoded = jwtDecode(token);
      return !!decoded;
    } catch (error) {
      return false;
    }
  }

  static isExpired(token: string) {
    try {
      const decoded = jwtDecode<BaseTokenPayload>(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    } catch (error) {
      return 'ERROR';
    }
  }

  static decode<T>(token: string) {
    try {
      return jwtDecode<T>(token);
    } catch (error) {
      return 'ERROR';
    }
  }

  static validateToken<T extends BaseTokenPayload>(
    token: string | null,
  ): [TOKEN_STATUS, string | null, T | null] {
    if (!token) {
      return [TOKEN_STATUS.INVALID, null, null];
    }

    const isValid = this.isValid(token);
    const isExpired = this.isExpired(token);
    const decoded = this.decode<T>(token);

    let status = TOKEN_STATUS.INVALID;

    if (isValid) {
      status = isExpired === true ? TOKEN_STATUS.EXPIRED : TOKEN_STATUS.VALID;
    }

    return [status, token, isValid ? (decoded as T) : null];
  }
}
