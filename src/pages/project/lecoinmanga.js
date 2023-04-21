import React from 'react';
import styles from '@/styles/Home.module.scss'
import Header from "../header";
import Footer from "../footer";


const LeCoinManga = () => {
  return (
    <div className={styles.projectContent}>
      <Header />
      <h1>Le Coin Manga</h1>

      <Footer />
    </div>
  );
};

export default LeCoinManga;
