import React from 'react';
import Link from 'next/link'
import styles from "@/styles/Home.module.scss";
import Header from "./header";
import Footer from "./footer";

const ContactComponent = () => {
  return (
    <div className={styles.contact}>
      <Header />

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
          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className={styles.contactDetails}>
        <h2>Mes coordonnées</h2>
        <p>Email : exemple@email.com</p>
        <p>Téléphone : +33 1 23 45 67 89</p>
      </div>

      <div className={styles.socialLinks}>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <div className={styles.location}>
        {/* Si vous avez une carte intégrée, vous pouvez la placer ici */}
      </div>

      <Footer />
    </div>
  );
};

export default ContactComponent;
