import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/AddStore.module.css';

export default function AddStorePhoto() {
  return (
    <>
      <Head>
        <title>Cakey Add Store Photo</title>
        <meta name="description" content="add store photo page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.add_store_contents}>
        <div className={styles.store_info_buttons_wrapper}>
          <div className={styles.store_indicate_wrapper}>스텝 인디케이터</div>
          <div className={styles.add_store_photo}>사진 추가하기</div>
        </div>
        <div>스킵 가능</div>
        <Link
          href="/add-store-recommendation"
          className={styles.add_store_button}
        >
          다음
        </Link>
      </div>
    </>
  );
}