import React from 'react';
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import styles from "@/styles/Home.module.scss";

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__container__left}>
          <h4>Remi Jacquemin</h4>
          <p>
          React front-end developer
          </p>
          <p>Paris - Ile de France</p>
        </div>

        <div className={styles.footer__container__right}>
          <h4>Follow me</h4>
          <div className={styles.footer__container__right__social}>
            <a href="https://www.linkedin.com/in/remi-jacquemin" target='_blank'>
              <span>
                <AiFillLinkedin />
              </span>
              Linkedin
            </a>
            <a href="https://www.github.com/Yama022" target='_blank'>
              <span>
                <AiFillGithub />
              </span>
              Github
            </a>
          </div>
        </div>

      </div>
      <h3>© 2024 Remi Jacquemin</h3>
    </div>
  );
};

export default FooterComponent;
