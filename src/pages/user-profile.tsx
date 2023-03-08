import Head from 'next/head';

import styles from '@/styles/UserProfile.module.css';

export default function UserProfile() {
  return (
    <>
      <Head>
        <title>Cakey User Profile</title>
        <meta name="description" content="user profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.user_profile_wrapper}>
        <div className={styles.user_profile_image}>유저 사진</div>
        <div>유저 이름</div>
        <button className={styles.button}>수정</button>
        <button className={styles.button}>탈퇴</button>
        <button className={styles.button}>로그아웃</button>
      </div>
    </>
  );
}
