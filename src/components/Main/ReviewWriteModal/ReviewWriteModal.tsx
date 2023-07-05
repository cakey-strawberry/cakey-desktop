import { useState } from 'react';

import { Button } from '@/common/components/Button';
import { Dialog } from '@/common/components/Dialog';

import TagList from './TagList';
import StoreInfoSection from './StoreInfoSection';
import AddingPhoto from './PhotoUploader';
import ReviewWritingSection from './ReviewWritingSection';

import type { ChangeEvent } from 'react';

type ReviewWriteModalProps = {
  isOpen: boolean;
  onCloseButtonClick: () => void;
};

export default function ReviewWriteModal({
  isOpen,
  onCloseButtonClick,
}: ReviewWriteModalProps) {
  const [reviewContent, setReviewContent] = useState<string>('');

  function handleReviewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setReviewContent(event.target.value);
  }

  return (
    <Dialog.Wrapper
      width="456px"
      headerText="리뷰쓰기"
      open={isOpen}
      onClose={onCloseButtonClick}
    >
      <Dialog.Content
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          marginTop: '8px',
        }}
      >
        <StoreInfoSection />
        <ReviewWritingSection
          value={reviewContent}
          onTextFieldChange={handleReviewCommentChange}
        />
        <AddingPhoto />
        <TagList />
      </Dialog.Content>
      <Dialog.Actions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Button
          sx={{
            width: '100%',
            height: '56px',
            fontSize: '16px',
            color: '#b4b9bc',
            backgroundColor: '#e9ecef',
            borderRadius: '100px',
          }}
        >
          리뷰 쓰기 완료
        </Button>
      </Dialog.Actions>
    </Dialog.Wrapper>
  );
}
