import React from 'react';
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import logo from "../../public/logo.png";
import Link from "next/link";

const HeaderComponent = () => {
  return (
  <div className={styles.header}>
    <div className={styles.header__logo}>
      <a href="/">
        <Image src={logo} width={50} height={50} />
      </a>
    </div>

    <div className={styles.header__nav}>
      <Link
        href="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h3>About</h3>
      </Link>
      <Link
        href="/experiences"
        style={{
          textDecoration: "none",
        }}
      >
        <h3>Experiences</h3>
      </Link>
      <Link
        href="/projects"
        style={{
          textDecoration: "none",
        }}
      >
        <h3>Projects</h3>
      </Link>
      <Link
        href="/contact"
        style={{
          textDecoration: "none",
        }}
      >
        <h3>Contact</h3>
      </Link>
    </div>
  </div>
  );
};

export default HeaderComponent;
