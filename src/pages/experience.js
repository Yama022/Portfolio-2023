import React from 'react';
import Link from 'next/link'
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

const ExpComponent = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className="styles__experience">
        <h1>Experience</h1>

      </div>

      <Footer />
    </div>
  );
};

export default ExpComponent;
