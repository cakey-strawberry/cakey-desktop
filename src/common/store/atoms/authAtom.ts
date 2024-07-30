import { atom } from 'jotai';

import type { SocialUserInfo } from '@/common/repositories/auth/types';

export const authAtom = atom(false);

type SocialUserInfoAtom = SocialUserInfo | null;

export const socialUserInfoAtom = atom<SocialUserInfoAtom>(null);
