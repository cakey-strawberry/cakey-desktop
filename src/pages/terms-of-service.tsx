import Head from 'next/head';
import { useRouter } from 'next/navigation';

import styles from '@/styles/Terms.module.css';

export default function TermsOfService() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cakey Terms of Service</title>
        <meta name="description" content="Terms of Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.comment_wrapper}>
        <p>서비스 이용 약관</p>
        <button className={styles.correct_button} onClick={router.back}>
          확인
        </button>
      </div>
    </>
  );
}
