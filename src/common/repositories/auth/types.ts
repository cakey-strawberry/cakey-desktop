export type GoogleLoginResponse = {
  data: SignedUserData | GuestData;
};

type SignedUserData = {
  accessToken: string;
  refreshToken: string;
};

type GuestData = {
  socialUserInfo: {
    avatar: string;
    id: string;
    name: string;
    oauthProvider: 'Google' | 'Kakao';
  };
};

export function isGuestData(
  data: SignedUserData | GuestData,
): data is GuestData {
  return (data as GuestData).socialUserInfo !== undefined;
}
