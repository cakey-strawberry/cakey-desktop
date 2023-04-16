import { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { Button } from '@/common/components/Button';

import { StoreReviewWrapper } from './Store.styled';

import EditIcon from '@/common/assets/icons/edit.svg';
import MoreVertIcon from '@/common/assets/icons/more-vert.svg';

import MockThumbnailImage from '@/common/assets/icons/thumbnail.png';

import type { MouseEvent } from 'react';

function StoreReview() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  function handleVertButtonClick(event: MouseEvent<HTMLElement>) {
    setAnchorEl((prevState) => (prevState ? null : event.currentTarget));
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <StoreReviewWrapper>
      <Button
        sx={{
          borderRadius: '100px',
          border: '1px solid #FFB2B6',
          color: '#FF5169',
          padding: '10px 24px 10px 16px',
        }}
        startIcon={<Image width={18} height={18} alt="edit" src={EditIcon} />}
      >
        리뷰 작성하기
      </Button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '16px',
        }}
      >
        <Box sx={{ borderBottom: '1px solid #f3f0f4' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginRight: '8px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: '40px',
                    height: '40px',
                    marginRight: '8px',
                  }}
                >
                  <Image fill alt="profile" src={MockThumbnailImage} />
                </Box>
                <Box
                  sx={{
                    fontWeight: 500,
                    color: '#111111',
                    letterSpacing: '0.1px',
                  }}
                >
                  여덟글자유저네임
                </Box>
              </Box>
              <Box sx={{ color: '#ACAAAF', letterSpacing: '0.4px' }}>
                23.12.13
              </Box>
            </Box>
            <Box>
              <IconButton sx={{ padding: 0 }} onClick={handleVertButtonClick}>
                <Image
                  alt="more vert"
                  src={MoreVertIcon}
                  width={24}
                  height={24}
                />
              </IconButton>
              <Menu
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                  sx: { width: '200px', borderRadius: '4px' },
                }}
              >
                <MenuItem
                  sx={{ width: '100%', height: '56px' }}
                  onClick={handleClose}
                >
                  차단하기
                </MenuItem>
                <MenuItem
                  sx={{ width: '100%', height: '56px' }}
                  onClick={handleClose}
                >
                  신고하기
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              margin: '16px 0',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '104px',
                height: '160px',
                marginRight: '8px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <Image fill alt="store" src={MockThumbnailImage} />
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '104px',
                height: '160px',
                marginRight: '8px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <Image fill alt="store" src={MockThumbnailImage} />
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '104px',
                height: '160px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <Image fill alt="store" src={MockThumbnailImage} />
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '80px',
              marginBottom: '16px',
              lineHeight: '20px',
              letterSpacing: '0.25px',
              textOverflow: 'ellipsis',
              color: '#303034',
            }}
          >
            크로와상의 결이 잘 살아 있다. 특별하지는 않지만 기본을 잘 지키는 곳.
            기본을 잘 지키는 것이 제일 어렵다.기본을 잘 지키는 것이 제일
            어렵다.기본을 잘 지키는 것이 제일 어렵다.기본을 잘 지키는 것이 제일
            어렵다.
          </Box>
        </Box>
      </Box>
    </StoreReviewWrapper>
  );
}

export default StoreReview;
