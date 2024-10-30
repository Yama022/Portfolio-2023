import React, { useState } from "react";
import { FaReact, FaJs, FaAngular, FaHtml5, FaCss3Alt, FaSass, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiMicrosoftazure, SiTailwindcss, SiRedux } from "react-icons/si";
import { RiFirebaseFill, RiNextjsLine } from "react-icons/ri";
import styles from "@/styles/Home.module.scss";

export default function Stack() {
  const [isPaused, setIsPaused] = useState(false); // État pour contrôler l'animation

  let iconStyles = { color: "white", fontSize: "3.5em" };

  const techStack = [
    { name: "React", icon: <FaReact />, color: "#00FFFF" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Next.js", icon: <RiNextjsLine />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <FaJs />, color: "#FFFF00", iconColor: "#000000" },
    { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#F16529" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#254BDD" },
    { name: "Sass", icon: <FaSass />, color: "#CC6699" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
    { name: "Azure", icon: <SiMicrosoftazure />, color: "#0089D6" },
    { name: "Firebase", icon: <RiFirebaseFill />, color: "#FFA611" }
  ];

  return (
    <div className={styles.stack}>
      <div
        className={`${styles.stack__slider} ${isPaused ? styles.paused : ""}`} // Ajoute la classe 'paused' lorsque isPaused est vrai
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
  );
}
