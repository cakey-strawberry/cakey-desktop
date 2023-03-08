import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/BookmarkedStores.module.css';

export default function BookmarkedStores() {
  return (
    <>
      <Head>
        <title>Cakey Bookmarked Stores</title>
        <meta name="description" content="bookmarked stores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bookmarked_stores_wrapper}>
        <div className={styles.bookmarked_store_wrapper}>
          <p>내가 북마크한 스토어 정보</p>
          <Link href="/" className={styles.bookmarked_button}>
            지도에서 보기
          </Link>
        </div>
        <div className={styles.bookmarked_store_wrapper}>
          <p>내가 북마크한 스토어 정보</p>
          <Link href="/" className={styles.bookmarked_button}>
            지도에서 보기
          </Link>
        </div>
        <div className={styles.bookmarked_store_wrapper}>
          <p>내가 북마크한 스토어 정보</p>
          <Link href="/" className={styles.bookmarked_button}>
            지도에서 보기
          </Link>
        </div>
      </div>
    </>
  );
}
