import React from 'react';
import Link from 'next/link'
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

const ContactComponent = () => {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
    <div className={styles.contact}>

      <div className={styles.contactHeader}>
        <h1>Contact</h1>
        <p>Vous avez des questions ou souhaitez discuter d'un projet ? N'hésitez pas à me contacter !</p>
      </div>

      <div className={styles.contactForm}>
        <form>
          <div>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder="Votre nom" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Votre email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Votre message"></textarea>
          </div>
          <button type="submit" className="button">Envoyer</button>
        </form>
      </div>

    </div>

    <div className="container__footer">
      <Footer />
    </div>
    </div>
  );
};

export default ContactComponent;
