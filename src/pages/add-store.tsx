import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/AddStore.module.css';

export default function AddStore() {
  return (
    <>
      <Head>
        <title>Cakey Add Store</title>
        <meta name="description" content="add store page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.add_store_contents}>
        <div className={styles.store_info_buttons_wrapper}>
          <div className={styles.store_indicate_wrapper}>스텝 인디케이터</div>
          <input
            placeholder="가게 이름을 입력해주세요"
            className={styles.store_input}
          />
        </div>
        <Link href="/add-store-address" className={styles.add_store_button}>
          다음
        </Link>
      </div>
    </>
  );
}
