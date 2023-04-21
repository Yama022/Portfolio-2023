import React from 'react';
import styles from '@/styles/Home.module.scss'
import Header from "../header";
import Footer from "../footer";


const Project1 = () => {
  return (
    <div className={styles.projectContent}>
      <Header />
      <h1>Project Explorastro</h1>

      <Footer />
    </div>
  );
};

export default Project1;
