import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FANTASTIC-GIGGLE blogs</title>
        <meta name="description" content="Super Cool Easy To Read Blogs.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx>
        {`
          h2 {
            font-size: 38px;
          }
          h3 {
            font-size: 28px;
          }
        `}
      </style>

      <main className={styles.main}>
        <h1 className={styles.title}>FANTASTIC-GIGGLE blogs</h1>

        <Image
          className={styles.myImg}
          src="/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
          alt="Landscape picture"
          width={237}
          height={158}
        />

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn HTML in 2022?</h3>
            <p>HTML is the body of website! lets learn it.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn HTML in 2022?</h3>
            <p>HTML is the body of website! lets learn it.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn HTML in 2022?</h3>
            <p>HTML is the body of website! lets learn it.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
