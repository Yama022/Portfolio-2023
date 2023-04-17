import React from 'react';
import Link from 'next/link'
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

const ExpComponent = () => {
  return (
    <div>
      <Header />
      <h1>Experience</h1>

      <Footer />
    </div>
  );
};

export default ExpComponent;
