import Head from "next/head";
import styles from "@/styles/Home.module.scss";

import About from "./about";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Remi Jacquemin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* <Header /> */}
        {/* <div className={styles.main}> */}
          <About />
        </div>

        <Footer />
      {/* </div> */}
    </>
  );
}
