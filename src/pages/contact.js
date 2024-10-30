'use client';

import React, { useEffect, useState } from 'react';
import { PopupWidget, PopupButton } from "react-calendly";
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

const ContactComponent = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next"));
    }
  }, []);

  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
      <div className={styles.contact}>
        <div className={styles.contact__header}>
          <p>Vous avez des questions ou souhaitez discuter d'un projet ? N'hésitez pas à me contacter !</p>
        </div>

        <div className={styles.contact__form}>
          <form>
            <div>
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="johndos@gmail.com" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Écrivez votre message ici"></textarea>
            </div>
            <button type="submit" className="button">Envoyer</button>
          </form>
        </div>

        <div className={styles.contact__calendly}>
              <PopupButton
                url="https://calendly.com/remijacquemin"
                rootElement={rootElement}
                text="Réserver un appel"
                className='button button--calendly'
              />
        </div>
      </div>

      <div className="container__footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactComponent;
