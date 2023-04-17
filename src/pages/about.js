import React from 'react';
import styles from '@/styles/Home.module.scss'

const AboutComponent = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>Hey, I'm REMI JACQUEMIN</h1>
      <p className={styles.about__desc}>My experience in front-end development has allowed me to refine my attention to detail and create innovative user interfaces that meet user needs and are a pleasure to use.</p>
    </div>
  );
};

export default AboutComponent;
