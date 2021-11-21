import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export async function getServerSideProps(context) {
  const res = await fetch(`https://jump-poap.vercel.app/api/claim`);
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  console.log(data);
  return {
    props: {link: data.link}, // will be passed to the page component as props
  }
}

export default function Home({link}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>🪂 JUMP 🪂</title>
        <meta name="description" content="JUMP POAP claim page" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Image
            className={styles.image}
            src="/logo.png"
            alt="Jump Logo"
            layout="fill"
          />
        </div>
        <div className={styles.content}>
          <h4>Thank you for filling out the survey 🙌</h4>
          <Link href={link} passHref>
            <div className={styles.claimButton}>Claim your POAP</div>
          </Link>
          <div className={styles.subline}>
            <sub>Please note: this link cannot be reused</sub>
          </div>
        </div>
      </main>
    </div>
  );
}
