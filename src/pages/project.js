import React from 'react';
import Link from 'next/link'
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";


const ProjectComponent = () => {
  return (
    <div className={styles.project}>
      <Header />
      <Link href='/project/explorastro'>
        <h1>Project</h1>
      </Link>
      <h1>Project</h1>
      <h1>Project</h1>

      <Footer />
    </div>
  );
};

export default ProjectComponent;
