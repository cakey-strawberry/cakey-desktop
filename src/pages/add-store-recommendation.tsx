import Head from 'next/head';
import Router from 'next/router';

import Modal from '@/common/components/Modal';

import { useModal } from '@/common/hooks/useModal';

import styles from '@/styles/AddStore.module.css';

export default function AddStoreRecommendation() {
  const { isOpen, openModal, closeModal } = useModal();

  function handleModalCloseButtonClick() {
    closeModal();
    Router.push('/');
  }

  return (
    <>
      <Head>
        <title>Cakey Add Store recommendation</title>
        <meta name="description" content="add store recommendation page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.add_store_contents}>
        <div className={styles.store_info_buttons_wrapper}>
          <div className={styles.store_indicate_wrapper}>스텝 인디케이터</div>
          <div className={styles.recommendation}>추천사</div>
          <div className={styles.recommendation_comment}>추천사 관련 문구</div>
        </div>
        <button onClick={openModal} className={styles.add_store_button}>
          추가하기
        </button>
      </div>
      {isOpen && (
        <Modal buttonText="확인" onClick={handleModalCloseButtonClick}>
          <div className={styles.review_wrapper}>스토어 생성 완료</div>
        </Modal>
      )}
    </>
  );
}
