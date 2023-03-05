import Head from 'next/head';
import Router from 'next/router';

import styles from '@/styles/ChefDetail.module.css';

export default function ChefDetail() {
  return (
    <>
      <Head>
        <title>Cakey Chef Detail</title>
        <meta name="description" content="chef detail page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.chef_contents}>
        <div className={styles.chef_detail}>셰프 디테일</div>
        <button onClick={() => Router.back()} className={styles.back_button}>
          뒤로 가기
        </button>
      </div>
    </>
  );
}
