import React from 'react';
import styles from '@/styles/Home.module.scss'
import { IoIosArrowDown } from 'react-icons/io';

const AboutComponent = () => {

  function splitText(text, maxLength) {
    const result = [];
    let start = 0;

    while (start < text.length) {
        let end = start + maxLength;
        if (end < text.length && text[end] !== ' ') {
            while (end > start && text[end] !== ' ') {
                end--;
            }
        }
        result.push(text.substring(start, end));
        start = end + 1; // +1 pour sauter l'espace
    }

    return result;
  }


  const originalText = "My experience in front-end development has allowed me to refine my attention to detail and create innovative user interfaces that meet user needs and are a pleasure to use.";
  const maxLength = 75;
  const lines = splitText(originalText, maxLength);
  console.log(lines, 'lines');


  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>Hey, I'm <span>REMI JACQUEMIN</span></h1>
      {lines.map((line, index) => (
        <p key={index} className={styles.about__desc}>{line}</p>
      ))}

      <div className={styles.about__project}>
        <a href="/project" className="button">Project</a>
      </div>

      {/* <div className={styles.about__arrow}>
        <button className={styles.about__arrow__button}>
          <IoIosArrowDown className={styles.about__arrow__button__arrow} />
        </button>
      </div> */}
    </div>
  );
};

export default AboutComponent;
