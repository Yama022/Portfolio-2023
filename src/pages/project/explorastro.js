import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "../header";
import Footer from "../footer";
import mac from "../../../public/mac.png";
import explorastro from "../../../public/explorastro.png";

const Project1 = () => {
  return (
    <div className={styles.projectContent}>
      <Header />
      <div className={styles.projectContent__container}>
        <h1>Project Explorastro</h1>
        <div className={styles.projectContent__container__image}>
          <Image src={mac} alt="image mac" />
          <div className={styles.projectContent__container__image__contain}>
            <Image src={explorastro} alt="image mac" />
          </div>
        </div>

        <div className={styles.projectContent__container__content}>
          <div className={styles.projectContent__container__content__description}>
            <p>
              ExplorAstro is a social network for astronomy enthusiasts. Organize
              and join exploration created by the community. This project was
              realized during "L'Apothéose" at o'Clock. In total, we are 4
              developers actively working on the project.
            </p>
          </div>

          <div className={styles.projectContent__container__content__techno}>
            <h2>Tools Used</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Sequelize</li>
              <li>S3 Bucket</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>

          </div>

          <div className={styles.projectContent__container__content__link}>
            <h2>Links</h2>
            <a href="https://github.com/Yama022/Explorastro" target="_blank">Github</a>
            <a href="http://www.explorastro.com" target="_blank">Website</a>
          </div>

          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project1;
