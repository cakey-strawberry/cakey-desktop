import Head from 'next/head';

import styles from '@/styles/StoreSearch.module.css';

export default function StoreSearch() {
  return (
    <>
      <Head>
        <title>Cakey Store Search</title>
        <meta name="description" content="store search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.store_result_text_wrapper}>검색어 결과</div>
      <div className={styles.store_search_wrapper}>
        <div className={styles.searched_store_wrapper}>스토어 이름</div>
        <div className={styles.searched_store_wrapper}>스토어 이름</div>
        <div className={styles.searched_store_wrapper}>스토어 이름</div>
      </div>
    </>
  );
}
