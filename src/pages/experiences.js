import React from 'react';
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";
import macImg from '../../public/pexelsMac.png'

const ExpComponent = () => {
  return (
  <div className="container">
    <div className="container__header">
      <Header />
    </div>

    <div className={styles.experience}>
      <div className={styles.experience__title}>
        <h2>Work Experiences</h2>
      </div>

      {/* <div className={styles.experience__imageContainer}>
        <Image src={macImg} alt="Image floutée" className={styles.experience__imageContainer__imageBlurred} />
        <Image src={macImg} alt="Description de l'image" className={styles.experience__imageContainer__imageSharp} />
      </div> */}


      {/* Expérience : L'Oréal Projet : Lot n°2 */}
      <article className={styles.experience__item}>
        <header>
          <h2 className={styles.experience__item__role}>Frontend React / Angular Developer</h2>
          <h3 className={styles.experience__item__company}>L'Oréal - Project : EVAL</h3>
        </header>
        <p className={styles.experience__item__date}>08/2023 - 10/2024 <em>( 1an - 3mois )</em></p>
        <p className={styles.experience__item__tech}>Technology : <span>Front end: React / Angular,</span><span>Back end: NodeJS / PHP</span></p>
        <div className={styles.experience__item__desc}>
          <p>Fullstack JS developer on the Digit Expert project at L'Oréal, managing incident tickets and bug fixes before going live.</p>
        </div>
      </article>


      {/* Expérience : CAPGEMINI - PROJET IDEE */}
      <article className={styles.experience__item}>
        <header>
          <h2 className={styles.experience__item__role}>Frontend React Developer</h2>
          <h3 className={styles.experience__item__company}>CAPGEMINI - PROJET IDEE</h3>
        </header>
        <p className={styles.experience__item__date}>05/2023 - 08/2023 <em>( 4mois )</em></p>
        <p className={styles.experience__item__tech}>Technology : HTML, SCSS, Javascript, React</p>
        <div className={styles.experience__item__desc}>
          <p>Front end React developer for R&I CapGemini on the IDEE - miniCV project. Component development in a team of 2 frontend developers and 1 backend developer.</p>
        </div>
      </article>

      {/* Expérience : CAPGEMINI - ALSTOM */}
      <article className={styles.experience__item}>
        <header>
          <h2 className={styles.experience__item__role}>Full Stack Developer</h2>
          <h3 className={styles.experience__item__company}>CAPGEMINI - ALSTOM</h3>
        </header>
        <p className={styles.experience__item__date}>11/2022 - 05/2023 <em>( 7mois )</em></p>
        <p className={styles.experience__item__tech}>Technology : HTML, SCSS, Javascript, Angular, NodeJS, SQL</p>
        <div className={styles.experience__item__desc}>
          <p>Creation of a web platform to connect 3D printers.</p>
        </div>
      </article>

      {/* Expérience : ExplorAstro */}
      <article className={styles.experience__item}>
        <header>
          <h2 className={styles.experience__item__role}>Frontend React Developer</h2>
          <h3 className={styles.experience__item__company}>ExplorAstro</h3>
        </header>
        <p className={styles.experience__item__date}>2021</p>
        <p className={styles.experience__item__tech}>Technology : HTML, SCSS, Javascript, React (avec Redux), Bulma</p>
        <div className={styles.experience__item__desc}>
          <p>Development of the first social network for astronomy enthusiasts.</p>
        </div>
      </article>


    </div>
    <div className="container__footer">
      <Footer />
    </div>
  </div>
  );
};

export default ExpComponent;
