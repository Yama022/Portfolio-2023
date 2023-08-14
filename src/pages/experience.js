import React from 'react';
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

const ExpComponent = () => {
  return (
    <div className={styles.experience}>
      <Header />

      <h1 className={styles.experience__title}>Works Experiences</h1>

      {/* Expérience : L'Oréal Projet : Lot n°2 */}
      <div className={styles.experience__item}>
        <h2 className={styles.experience__item__role}>Frontend React / Angular Developer</h2>
        <h3 className={styles.experience__item__company}>L'Oréal - Project : Lot n°2</h3>
        <p className={styles.experience__item__date}>08/2023 - Present</p>
        <p className={styles.experience__item__tech}>Technology : Front end: React / Angular, Back end: NodeJS / PHP</p>
        <p className={styles.experience__item__desc}>Fullstack JS developer on the Digit Expert project at L'Oréal, managing incident tickets and bug fixes before going live.</p>
      </div>

      {/* Expérience : CAPGEMINI - PROJET IDEE */}
      <div className={styles.experience__item}>
        <h2 className={styles.experience__item__role}>Frontend React Developer</h2>
        <h3 className={styles.experience__item__company}>CAPGEMINI - PROJET IDEE</h3>
        <p className={styles.experience__item__date}>05/2023 - 08/2023</p>
        <p className={styles.experience__item__tech}>Technology : HTML, SCSS, Javascript, React</p>
        <p className={styles.experience__item__desc}>Front end React developer for R&I CapGemini on the IDEE - miniCV project. Component development in a team of 2 frontend developers and 1 backend developer.</p>
      </div>

      {/* Expérience : CAPGEMINI - ALSTOM */}
      <div className={styles.experience__item}>
        <h2 className={styles.experience__item__role}>Full Stack Developer</h2>
        <h3 className={styles.experience__item__company}>CAPGEMINI - ALSTOM</h3>
        <p className={styles.experience__item__date}>11/2022 - 05/2023</p>
        <p className={styles.experience__item__tech}>Technology : HTML, SCSS, Javascript, Angular, NodeJS, SQL</p>
        <p className={styles.experience__item__desc}>Creation of a web platform to connect 3D printers.</p>
      </div>

      {/* Expérience : ExplorAstro */}
      <div className={styles.experience__item}>
        <h2 className={styles.experience__item__role}>Frontend Developer</h2>
        <h3 className={styles.experience__item__company}>ExplorAstro</h3>
        <p className={styles.experience__item__date}>2021</p>
        <p className={styles.experience__item__tech}>Technology : HTML, SCSS, Javascript, React (avec Redux), Bulma</p>
        <p className={styles.experience__item__desc}>Development of the first social network for astronomy enthusiasts.</p>
      </div>







      <Footer />
    </div>
  );
};

export default ExpComponent;
