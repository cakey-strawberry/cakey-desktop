import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';

import Modal from '@/common/components/Modal';
import { Dialog } from '@/common/components/Dialog';
import { NeedSignUpModal } from '@/components/Auth/NeedSignUpModal';

import {
  useModal as useSignUpModal,
  useModal as useCommentAddModal,
  useModal as useCommentEditModal,
} from '@/common/hooks/useModal';

import styles from '@/styles/StoreMap.module.css';

export default function StoreMap() {
  const {
    isOpen: isCommentAddOpen,
    openModal: openCommentAddModal,
    closeModal: closeCommentAddModal,
  } = useCommentAddModal();

  const {
    isOpen: isSignUpOpen,
    openModal: openSignUpModal,
    closeModal: closeSignUpModal,
  } = useSignUpModal();

  const {
    isOpen: isCommentEdit,
    openModal: openCommentEditModal,
    closeModal: closeCommentEditModal,
  } = useCommentEditModal();

  function handleCommentAddButtonClick() {
    if (process.env.NEXT_PUBLIC_USER_LOGIN === 'true') {
      openCommentAddModal();
    } else {
      openSignUpModal();
    }
  }

  return (
    <>
      <Head>
        <title>Cakey Store Map</title>
        <meta name="description" content="See the store and map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.store_contents}>
        <div className={styles.store_detail}>
          <div className={styles.store_info_wrapper}>
            <Link href="/chef-detail" className={styles.chef_info_button}>
              셰프 정보보기
            </Link>
          </div>
          <div className={styles.store_info_wrapper}>
            <button
              onClick={handleCommentAddButtonClick}
              className={styles.comment_button}
            >
              작성하기
            </button>
          </div>
          <div className={styles.store_info_wrapper}>
            <button
              onClick={openCommentEditModal}
              className={styles.comment_button}
            >
              코멘트 열어보기
            </button>
          </div>
        </div>
        <div className={styles.store_map}>StoreMap</div>
      </div>
      {isCommentEdit && (
        <Dialog.Wrapper
          open={true}
          width="312px"
          onClose={closeCommentEditModal}
        >
          <Dialog.Title>title</Dialog.Title>
          <Dialog.Content>
            A dialog is a type of modal window that appears in front of app
            content to provide critical information, or prompt for a decision to
            be made.
          </Dialog.Content>
          <Dialog.Actions>
            <Button onClick={closeCommentEditModal} sx={{ color: '#FF5169' }}>
              취소
            </Button>
            <Button
              sx={{
                width: '105px',
                borderRadius: '100px',
                backgroundColor: '#FF5169',
                color: '#ffffff',
              }}
            >
              확인
            </Button>
          </Dialog.Actions>
        </Dialog.Wrapper>
      )}
      {isCommentAddOpen && (
        <Modal buttonText="닫기" onClick={closeCommentAddModal}>
          <div className={styles.review_wrapper}>리뷰 생성 완료</div>
        </Modal>
      )}
      {isSignUpOpen && (
        <NeedSignUpModal onCloseButtonClick={closeSignUpModal} />
      )}
    </>
  );
}
