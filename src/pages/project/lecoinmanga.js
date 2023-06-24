import React from 'react';
import styles from '@/styles/Home.module.scss'
import Header from "../header";
import Footer from "../footer";


const LeCoinManga = () => {
  return (
    <div className={styles.projectContent}>
      <Header />
      <div className={styles.projectContent__container}>
        <h1>Project Le Coin Manga</h1>
      </div>

      <Footer />
    </div>
  );
};


export default LeCoinManga;
