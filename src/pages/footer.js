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
            <a href="https://www.linkedin.com/in/remi-jacquemin-5b1b3b1b3/">
              moi
            </a>
          </div>
        </div>

      </div>
      <h3>© 2021 Remi Jacquemin</h3>
    </div>
  );
};

export default FooterComponent;
