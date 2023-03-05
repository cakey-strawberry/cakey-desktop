import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import styles from '@/styles/PrivacyTermsSignUp.module.css';

export default function PrivacyTermsSignUp() {
  return (
    <>
      <Head>
        <title>Cakey Privacy Terms SignUp</title>
        <meta name="description" content="Privacy Terms SignUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.privacy_terms_buttons_wrapper}>
        <div className={styles.privacy_terms_button_checkbox_wrapper}>
          <button
            onClick={() => Router.push('/terms-of-service')}
            className={styles.privacy_button}
          >
            서비스 이용약관
          </button>
          <input type="checkbox" />
        </div>
        <div className={styles.privacy_terms_button_checkbox_wrapper}>
          <button
            onClick={() => Router.push('/terms-of-location')}
            className={styles.privacy_button}
          >
            위치 기반 서비스 약관 동의
          </button>
          <input type="checkbox" />
        </div>
        <Link href="/profile-signup" className={styles.privacy_button}>
          다음
        </Link>
      </div>
    </>
  );
}
