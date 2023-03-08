import Head from 'next/head';
import Link from 'next/link';

import Modal from '@/common/components/Modal';
import { NeedSignUpModal } from '@/components/Auth/NeedSignUpModal';

import { useModal as useSignUpModal } from '@/common/hooks/useModal';
import { useModal as useCommentAddModal } from '@/common/hooks/useModal';

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
        </div>
        <div className={styles.store_map}>StoreMap</div>
      </div>
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
