// 차후 아래 type 은 삭제 혹은 개선 필요
type StoreLabel = '쉐프 추천' | '디저트' | '커피';

type UserType = 'common' | 'recommend';

type Store = {
  id: number;
  isAd: boolean;
  title: string;
  address: string;
  labels: StoreLabel[];
  commentInfo?: {
    comment: string;
    user: string;
    thumbnail: string;
    userType: UserType;
    recommendUser: boolean;
  };
  isBookmarked: boolean;
};

export const STORES: Store[] = [
  {
    id: 1,
    isAd: true,
    title: '테디뵈르 하우스',
    address: '서울 용산구 한강대로40가길 42 1층',
    labels: ['쉐프 추천', '디저트'],
    commentInfo: {
      user: '유저1',
      comment: '추천사입니다! 이것은 추천사입니다! 텍스트 확인용 화이팅 CAKEY!',
      thumbnail: 'mock',
      userType: 'recommend',
      recommendUser: true,
    },
    isBookmarked: false,
  },
  {
    id: 2,
    isAd: false,
    title: '테디뵈르 하우스',
    address: '서울 용산구 한강대로40가길 42 1층',
    labels: ['디저트', '커피'],
    isBookmarked: true,
  },
  {
    id: 3,
    isAd: false,
    title: '테디뵈르 하우스',
    address: '서울 용산구 한강대로40가길 42 1층',
    labels: ['쉐프 추천', '디저트'],
    commentInfo: {
      user: '유저1',
      comment: '추천사입니다!',
      thumbnail: 'mock',
      userType: 'common',
      recommendUser: false,
    },
    isBookmarked: false,
  },
  {
    id: 4,
    isAd: false,
    title: '테디뵈르 하우스',
    address: '서울 용산구 한강대로40가길 42 1층',
    labels: ['쉐프 추천', '디저트'],
    commentInfo: {
      user: '유저1',
      comment: '추천사입니다!',
      thumbnail: 'mock',
      userType: 'common',
      recommendUser: false,
    },
    isBookmarked: false,
  },
  {
    id: 5,
    isAd: false,
    title: '테디뵈르 하우스',
    address: '서울 용산구 한강대로40가길 42 1층',
    labels: ['쉐프 추천', '디저트'],
    commentInfo: {
      user: '유저1',
      comment: '추천사입니다!',
      thumbnail: 'mock',
      userType: 'common',
      recommendUser: false,
    },
    isBookmarked: false,
  },
];
