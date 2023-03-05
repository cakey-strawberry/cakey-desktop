import Head from 'next/head';
import Router from 'next/router';

import styles from '@/styles/Terms.module.css';

export default function TermsOfLocation() {
  return (
    <>
      <Head>
        <title>Cakey Terms of Location</title>
        <meta name="description" content="Terms of Location" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.comment_wrapper}>
        <p>위치 기반 서비스 이용 약관</p>
        <button className={styles.correct_button} onClick={Router.back}>
          확인
        </button>
      </div>
    </>
  );
}
