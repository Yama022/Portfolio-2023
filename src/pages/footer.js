import React from 'react';
import styles from "@/styles/Home.module.scss";

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__container__left}>
          <h4>Remi Jacquemin</h4>
          <p>
            1 rue de la paix <br />
            75000 Paris
          </p>
        </div>

        <div className={styles.footer__container__right}>
          <h4>Follow me</h4>
          <div className={styles.footer__container__right__social}>
            <a href="https://www.linkedin.com/in/remi-jacquemin" target='_blank'>
              Linkedin
            </a>
            <a href="https://www.github.com/Yama022" target='_blank'>
              Github
            </a>
          </div>
        </div>

      </div>
      <h3>© 2023 Remi Jacquemin</h3>
    </div>
  );
};

export default FooterComponent;
