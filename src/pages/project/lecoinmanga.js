import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "../header";
import Footer from "../footer";
import imac from "../../../public/imac.png";
import explorastro from "../../../public/explorastro.png";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaSass, FaNodeJs, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiMysql, SiRedux, SiMongodb, SiSequelize } from "react-icons/si";
import { FaBucket, FaGithub } from "react-icons/fa6";

const LeCoinManga = () => {

  const [isPaused, setIsPaused] = useState(false); // État pour contrôler l'animation

  let iconStyles = { color: "white", fontSize: "3.5em" };

  const techStack = [
    { name: "React", icon: <FaReact />, color: "#00FFFF" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "JavaScript", icon: <FaJs />, color: "#FFFF00", iconColor: "#000000" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#F16529" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#254BDD" },
    { name: "Sass", icon: <FaSass />, color: "#CC6699" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    { name: "Sequelize", icon: <SiSequelize />, color: "#399AF3" },
    { name: "S3 Bucket", icon: <FaBucket />, color: "#FF9900" },
    { name: "Git", icon: <FaGitAlt />, color: "#F34F29" },
    { name: "GitHub", icon: <FaGithub />, color: "#000000" }
  ];

  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectContent__container}>
          <h1>Project LeCoinManga</h1>
          <div className={styles.projectContent__container__image}>
            <Image src={imac} alt="image mac" />
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
              <div
                className={`${styles.projectContent__container__content__techno__slider} ${isPaused ? styles.paused : ""}`} // Ajoute la classe 'paused' lorsque isPaused est vrai
              >
                <div className={styles.stack__list}>
                  {techStack.concat(techStack).map((tech, index) => (
                    <span
                      key={index}
                      className={styles.stack__list__icons}
                      style={{
                        backgroundColor: tech.color,
                        color: tech.iconColor || "#ffffff"
                      }}
                      onMouseEnter={() => setIsPaused(true)} // Active l'état pause au survol
                      onMouseLeave={() => setIsPaused(false)} // Désactive l'état pause à la sortie du survol
                    >
                      {React.cloneElement(tech.icon, { style: iconStyles })}
                      <span className={styles.stack__list__name}>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className={styles.projectContent__container__content__link}>
              <h2>Links</h2>
              <a href="https://github.com/Yama022/Explorastro" target="_blank">Github</a>
              <a href="http://www.explorastro.com" target="_blank">Website</a>
            </div>

            </div>
        </div>

        <div className="container__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeCoinManga;
