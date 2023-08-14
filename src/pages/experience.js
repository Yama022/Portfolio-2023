import React from 'react';
import Link from 'next/link'
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

const ExpComponent = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.experience}>
        <h1 className={styles.experience.title}>Experience</h1>

        <div className={styles.experience.list}>
            <h2 className={styles.experience.list__title}>Frontend Developer</h2>
            <h3 className={styles.experience.list__company}>Company Name</h3>
            <p className={styles.experience.list__date}>2019 - 2020</p>
            <p className={styles.experience.list__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.</p>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ExpComponent;
