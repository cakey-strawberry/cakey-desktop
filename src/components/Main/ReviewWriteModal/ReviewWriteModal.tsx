import { Button } from '@/common/components/Button';
import { Dialog } from '@/common/components/Dialog';

import TagList from './TagList';
import StoreInfoSection from './StoreInfoSection';
import AddingPhoto from './PhotoUploader';
import ReviewWritingSection from './ReviewWritingSection';
import { useReviewForm } from './hooks/useReviewForm';

type ReviewWriteModalProps = {
  isOpen: boolean;
  onCloseButtonClick: () => void;
};

export default function ReviewWriteModal({
  isOpen,
  onCloseButtonClick,
}: ReviewWriteModalProps) {
  const {
    control,
    currentValue,
    submitDisabled,
    handleSubmit,
    handleTagChange,
    handlePhotoChange,
  } = useReviewForm();

  return (
    <Dialog.Wrapper
      width="456px"
      headerText="리뷰쓰기"
      open={isOpen}
      onClose={onCloseButtonClick}
    >
      <form onSubmit={handleSubmit}>
        <Dialog.Content
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            marginTop: '8px',
          }}
        >
          <StoreInfoSection />
          <ReviewWritingSection control={control} />
          <AddingPhoto control={control} onChange={handlePhotoChange} />
          <TagList
            currentTags={currentValue.tags}
            onChange={handleTagChange}
            control={control}
          />
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
            type="submit"
            disabled={submitDisabled}
            sx={{
              width: '100%',
              height: '56px',
              fontSize: '16px',
              color: submitDisabled ? '#495057' : '#FFFFFF',
              backgroundColor: submitDisabled ? '#E9ECEF' : '#FF5775',
              borderRadius: '100px',
              '&:hover': {
                backgroundColor: submitDisabled ? '#E9ECEF' : '#FF5775',
              },
            }}
          >
            리뷰 쓰기 완료
          </Button>
        </Dialog.Actions>
      </form>
    </Dialog.Wrapper>
  );
}
