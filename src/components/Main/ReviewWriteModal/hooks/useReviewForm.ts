import { useForm } from 'react-hook-form';

export type Photo = { id: number; file: File };

export type ReviewWriteFormValues = {
  tags: string[];
  photos: Photo[];
  comment: string;
};

const defaultValues: ReviewWriteFormValues = {
  tags: [],
  photos: [],
  comment: '',
};

export function useReviewForm() {
  const { control, handleSubmit, setValue, watch, reset } =
    useForm<ReviewWriteFormValues>({
      defaultValues,
    });

  function onsubmit(formValues: ReviewWriteFormValues) {
    // TODO: form value 확인용. api 연결 시 해당 console.log는 제거하기
    console.log(formValues);
    reset();
  }

  function handlePhotoChange(photos: { id: number; file: File }[]) {
    setValue('photos', photos);
  }

  function handleTagChange(tags: string[]) {
    setValue('tags', tags);
  }

  const [commentValue, tagsValue] = watch(['comment', 'tags']);
  const submitDisabled = !commentValue.length || !tagsValue.length;

  return {
    handleSubmit: handleSubmit(onsubmit),
    handlePhotoChange,
    handleTagChange,
    control,
    currentValue: watch(),
    submitDisabled,
  };
}
