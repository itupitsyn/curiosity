import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Curiosity</title>
        <meta name="description" content="curiosity killed the cat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          А что это ты такой любопытный, оболтус?
        </h1>
      </main>

    </div>
  )
}
