import React from 'react';
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import logo from "../../public/logo.png";
import Link from "next/link";

const HeaderComponent = () => {
  return (
<div className={styles.header}>
          <div className={styles.header__logo}>
            <Image src={logo} width={50} height={50} />
          </div>

          <div className={styles.header__nav}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
              }}
            >
              <h2>About</h2>
            </Link>
            <Link
              href="/experience"
              style={{
                textDecoration: "none",
              }}
            >
              <h2>Experience</h2>
            </Link>
            <Link
              href="/project"
              style={{
                textDecoration: "none",
              }}
            >
              <h2>Project</h2>
            </Link>
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
              }}
            >
              <h2>Contact</h2>
            </Link>
          </div>
        </div>
  );
};

export default HeaderComponent;
