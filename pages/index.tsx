import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="curiosity killed the cat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Хули ты такой любопытный, пидор?
      </main>

    </div>
  )
}
