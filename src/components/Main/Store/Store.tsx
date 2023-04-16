import Image from 'next/image';
import Box from '@mui/material/Box';

import { Chip } from '@/common/components/Chip';
import { Button } from '@/common/components/Button';

import {
  StoreInfo,
  StoreName,
  StoreChips,
  StoreImage,
  StoreWrapper,
  StoreDetailInfo,
  StoreReviewWrapper,
  StoreNameAndFavorite,
  StoreDetailInfoWrapper,
  TimePointer,
} from './Store.styled';

import CakeIcon from '@/common/assets/icons/cake.svg';
import EditIcon from '@/common/assets/icons/edit.svg';
import PlaceIcon from '@/common/assets/icons/place.svg';
import AccessTimeIcon from '@/common/assets/icons/access-time.svg';
import UnFilledStarIcon from '@/common/assets/icons/unfilled-star.svg';
import MockThumbnailImage from '@/common/assets/icons/thumbnail.png';

export default function Store() {
  return (
    <StoreWrapper>
      <StoreInfo>
        <StoreImage>
          <Image fill alt="store thumbnail" src={MockThumbnailImage} />
        </StoreImage>
        <StoreDetailInfoWrapper>
          <StoreNameAndFavorite>
            <StoreName>퇴디뵈르 하우스</StoreName>
            <Button
              sx={{
                minWidth: 0,
                maxWidth: '34px',
                maxHeight: '34px',
                padding: 0,
              }}
            >
              <Image
                src={UnFilledStarIcon}
                alt="Favorites"
                width={36}
                height={36}
              />
            </Button>
          </StoreNameAndFavorite>
          <StoreChips>
            <Chip
              sx={{
                color: '#FF5169',
                backgroundColor: '#FFEDEC',
                // TODO: 차후 Chip 컴포넌트에서 avatar 유무에 따라 padding을 조절할 수 있도록 수정
                paddingLeft: '8px',
                marginRight: '5px',
              }}
              avatar={
                <Image width={18} height={18} alt="cake" src={CakeIcon} />
              }
              label="요즘 뜨는 곳"
            />
            <Chip sx={{ marginRight: '5px' }} label="디저트" />
            <Chip label="커피" />
          </StoreChips>
          <Box>
            <StoreDetailInfo sx={{ marginBottom: '8px' }}>
              <Image
                style={{ marginRight: '8px' }}
                width={16}
                height={16}
                alt="place"
                src={PlaceIcon}
              />
              서울특별시 용산구 한강대로40가길 42 1층
            </StoreDetailInfo>
            <StoreDetailInfo>
              <Image
                style={{ marginRight: '8px' }}
                width={16}
                height={16}
                alt="place"
                src={AccessTimeIcon}
              />
              영업중 <TimePointer /> 10:00 ~ 22:00
            </StoreDetailInfo>
          </Box>
        </StoreDetailInfoWrapper>
      </StoreInfo>
      <StoreReviewWrapper>
        <Button
          sx={{
            borderRadius: '100px',
            border: '1px solid #FFB2B6',
            color: '#FF5169',
            padding: '10px 24px 10px 16px',
          }}
          startIcon={<Image src={EditIcon} width={18} height={18} alt="edit" />}
        >
          리뷰 작성하기
        </Button>
      </StoreReviewWrapper>
    </StoreWrapper>
  );
}
