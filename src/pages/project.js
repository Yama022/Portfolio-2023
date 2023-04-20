import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

import mac from "../../public/mac.png";

const ProjectComponent = () => {
  return (
    <div className="styles__container">
      <Header />

    <div className={styles.project}>
      <div className={styles.project__list}>
        <div className={styles.project__list__item}>
          <Link href="/project/explorastro">
            <div className={styles.project__list__item__container}>
              <div className={styles.project__list__item__container__image}>
                <Image src={mac} width={100} alt="image mac" />
              </div>
              <div className={styles.project__list__item__container__content}>
                <h1>Explorastro</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.project__list__item}>
          <Link href="/project/explorastro">
            <div className={styles.project__list__item__container}>
              <div className={styles.project__list__item__container__image}>
                <Image src={mac} width={100} alt="image mac" />
              </div>
              <div className={styles.project__list__item__container__content}>
                <h1>Project</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.project__list__item}>
          <Link href="/project/explorastro">
            <div className={styles.project__list__item__container}>
              <div className={styles.project__list__item__container__image}>
                <Image src={mac} width={100} alt="image mac" />
              </div>
              <div className={styles.project__list__item__container__content}>
                <h1>Project</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </div>
      <Footer />
    </div>
  );
};

export default ProjectComponent;
