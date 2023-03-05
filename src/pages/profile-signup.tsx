import Head from 'next/head';
import Router from 'next/router';

import styles from '@/styles/ProfileSignUp.module.css';

export default function ProfileSignUp() {
  return (
    <>
      <Head>
        <title>Cakey Profile SignUp</title>
        <meta name="description" content="Privacy Profile SignUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.profile_signUp_wrapper}>
        <div className={styles.profile_image}>
          <button className={styles.profile_image_add_button}>추가</button>
        </div>
        <input
          className={styles.profile_input_wrapper}
          placeholder="닉네임을 입력하세요"
        />
        <button
          onClick={() => Router.push('/congratulation-signup')}
          className={styles.button}
        >
          가입하기
        </button>
      </div>
    </>
  );
}
