import React, { useEffect } from 'react';
import styles from '@/styles/Home.module.scss'
import Link from "next/link";

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
      <h1 className={styles.about__title}>Hey, I'm REMI JACQUEMIN</h1>
      {lines.map((line, index) => (
        <p key={index} className={styles.about__desc}>{line}</p>
      ))}

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
