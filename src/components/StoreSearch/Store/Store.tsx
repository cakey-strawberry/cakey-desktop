import Image from 'next/image';
import Box from '@mui/material/Box';

import QuotesIcon from '@/common/assets/icons/quotes.svg';
import ThumbnailImage from '@/common/assets/icons/thumbnail.png';
import FilledStarIcon from '@/common/assets/icons/filled-star.svg';
import UnFilledStarIcon from '@/common/assets/icons/unfilled-star.svg';
import RecommendUserIcon from '@/common/assets/icons/recommend-user.svg';

import { StoreADChip, StoreSearchLabelChip } from '../Chip';

import {
  StoreWrapper,
  StoreImageWrapper,
  StoreInfoWrapper,
  StoreHeader,
  StoreInfo,
  StoreTitleWrapper,
  StoreTitle,
  StoreFavoriteButton,
  StoreAddress,
  StoreCommentUserWrapper,
  StoreCommentWrapper,
  StoreUserProfile,
  StoreUserName,
  StoreComment,
} from './Store.styled';

type StoreLabel = '쉐프 추천' | '디저트' | '커피';

type StoreProps = {
  id: number;
  isAd: boolean;
  title: string;
  address: string;
  labels: StoreLabel[];
  commentInfo?: {
    comment: string;
    user: string;
    thumbnail: string;
    recommendUser: boolean;
  };
  isBookmarked: boolean;
};

export default function Store({
  isAd,
  title,
  address,
  labels,
  commentInfo,
  isBookmarked,
}: StoreProps) {
  return (
    <StoreWrapper>
      <StoreImageWrapper>
        <Image src={ThumbnailImage} alt="store image" fill />
      </StoreImageWrapper>
      <StoreInfoWrapper>
        <StoreHeader>
          <StoreInfo>
            <StoreTitleWrapper>
              {isAd && <StoreADChip />}
              <StoreTitle>{title}</StoreTitle>
            </StoreTitleWrapper>
            <StoreFavoriteButton>
              <Image
                src={isBookmarked ? FilledStarIcon : UnFilledStarIcon}
                alt="Favorites"
                width={24}
                height={24}
              />
            </StoreFavoriteButton>
          </StoreInfo>
          <StoreAddress>{address}</StoreAddress>
          <Box>
            {labels.map((label) => (
              <StoreSearchLabelChip
                key={label}
                label={label}
                isRecommend={label === '쉐프 추천'}
              />
            ))}
          </Box>
        </StoreHeader>
        {commentInfo && (
          <StoreCommentWrapper>
            <StoreComment>
              <Image
                src={QuotesIcon}
                alt="quotes"
                width={9}
                height={7}
                style={{ marginRight: '4px' }}
              />{' '}
              {commentInfo.comment}
            </StoreComment>
            <StoreCommentUserWrapper>
              <StoreUserProfile>
                <Image src={ThumbnailImage} alt="user profile" fill />
              </StoreUserProfile>
              <StoreUserName>{commentInfo.user}</StoreUserName>
              {commentInfo.recommendUser && (
                <Image src={RecommendUserIcon} alt="recommend user" />
              )}
            </StoreCommentUserWrapper>
          </StoreCommentWrapper>
        )}
      </StoreInfoWrapper>
    </StoreWrapper>
  );
}
