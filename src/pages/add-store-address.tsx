import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/AddStore.module.css';

export default function AddStoreAddress() {
  return (
    <>
      <Head>
        <title>Cakey Add Store Address</title>
        <meta name="description" content="add store address page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.add_store_contents}>
        <div className={styles.store_info_buttons_wrapper}>
          <div className={styles.store_indicate_wrapper}>스텝 인디케이터</div>
          <input
            placeholder="스토어 주소 입력"
            className={styles.store_input}
          />
        </div>
        <Link href="/add-store-information" className={styles.add_store_button}>
          다음
        </Link>
      </div>
    </>
  );
}
