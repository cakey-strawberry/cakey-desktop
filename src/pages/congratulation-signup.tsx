import Head from 'next/head';
import Router from 'next/router';

import styles from '@/styles/CongratulationSignUp.module.css';

export default function CongratulationSignUp() {
  return (
    <>
      <Head>
        <title>Cakey Congratulation SignUp</title>
        <meta name="description" content="Privacy Congratulation SignUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.congratulation_signUp_wrapper}>
        <div className={styles.congratulation_wrapper}>축하 관련 메시지</div>
        <button onClick={() => Router.push('/')} className={styles.button}>
          확인
        </button>
      </div>
    </>
  );
}
