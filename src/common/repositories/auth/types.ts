export type GoogleLoginResponse = {
  data: SignedUserData | GuestData;
};

export type KakaoLoginResponse = {
  data: SignedUserData | GuestData;
};

type SignedUserData = {
  accessToken: string;
  refreshToken: string;
};

type GuestData = {
  socialUserInfo: SocialUserInfo;
};

export type SocialUserInfo = {
  avatar: string;
  id: string;
  name: string;
  oauthProvider: 'Google' | 'Kakao';
};

export function isGuestData(
  data: SignedUserData | GuestData,
): data is GuestData {
  return (data as GuestData).socialUserInfo !== undefined;
}

export type SignUpResponse = {
  data: SignedUserData;
};
