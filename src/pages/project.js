import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

import mac from "../../public/mac.png";
import explorastro from "../../public/explorastro.png";
// import explorastro from "../../public/apple.jpg";
import lecoinmanga from "../../public/lecoinmanga.png";

const ProjectComponent = () => {
  return (
    <div className="styles__container">
      <Header />

    <div className={styles.project}>

      <div className={styles.project__title}>
        <h1>Projects</h1>
      </div>
      <div className={styles.project__list}>
        <div className={styles.project__list__item}>
          <Link href="/project/explorastro" style={{ textDecoration: 'none' }}>
            <div className={styles.project__list__item__container}>
              <div className={styles.project__list__item__container__image}>
                <Image
                  src={mac}
                  alt="image mac"
                />
                <div className={styles.project__list__item__container__image__contain}>
                  <Image 
                    src={explorastro}
                    alt="image mac"
                  />
                </div>
              </div>
              <div className={styles.project__list__item__container__content}>
                <h2>Explorastro</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus reiciendis, magni eaque ut nisi reprehenderit vel ullam aliquam? Modi minus soluta ex neque provident non iusto nobis, rem quod.
                At et quam obcaecati voluptas quas vel natus, iure velit voluptate, repudiandae saepe veniam dolorem pariatur non, molestias consequuntur! Voluptates ad id numquam amet neque sunt repellendus harum molestiae doloremque.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.project__list__item}>
          <Link href="/project/explorastro" style={{ textDecoration: 'none' }}>
            <div className={styles.project__list__item__container}>
              <div className={styles.project__list__item__container__image}>
                <Image
                  src={mac}
                  alt="image mac"
                />
                <div className={styles.project__list__item__container__image__contain}>
                  <Image 
                    src={lecoinmanga}
                    alt="image mac"
                  />
                </div>
              </div>
              <div className={styles.project__list__item__container__content}>
                <h2>LeCoinManga</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eaque enim placeat aperiam vero est eius repellendus ullam perspiciatis ex corporis reiciendis iure fuga repellat facere hic, iusto itaque tempore?
                Iusto voluptates veniam officiis facere asperiores corporis et voluptas distinctio vero quidem necessitatibus laborum neque aliquid hic totam molestias architecto quis, eaque, sunt corrupti dolorem. Consequatur rerum aspernatur quidem esse.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.project__list__item}>
          <Link href="/project/explorastro" style={{ textDecoration: 'none' }}>
            <div className={styles.project__list__item__container}>
              <div className={styles.project__list__item__container__image}>
                <Image
                  src={mac}
                  alt="image mac"
                />
                <div className={styles.project__list__item__container__image__contain}>
                  <Image 
                    src={lecoinmanga}
                    alt="image mac"
                  />
                </div>
              </div>
              <div className={styles.project__list__item__container__content}>
                <h2>Project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quas praesentium esse quos, provident consequuntur sapiente eaque tempora eveniet quia. Rerum blanditiis inventore qui ex fugit illo natus magnam laudantium?
                Ducimus eos vero commodi sit distinctio tempora exercitationem quo laborum quibusdam eaque fugiat rerum quae corrupti accusamus perspiciatis, sapiente aspernatur hic assumenda! Dignissimos nulla suscipit odio, tempore deleniti pariatur aliquam.</p>
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
