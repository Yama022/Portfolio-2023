import React from 'react';
import styles from '@/styles/Home.module.scss'
import Link from "next/link";

const AboutComponent = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>Hey, I'm REMI JACQUEMIN</h1>
      <p className={styles.about__desc}>My experience in front-end development has allowed me to refine my attention to detail and create innovative user interfaces that meet user needs and are a pleasure to use.</p>

      <div className={styles.about__project}>
        <button>
        <a
              href="/project"
              style={{
                textDecoration: "none",
              }}
            >
              Project
            </a>
        </button>
      </div>
    </div>
  );
};

export default AboutComponent;
