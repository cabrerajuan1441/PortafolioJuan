import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.footP}>Creado por: Cabrera Juan Pablo</p>
      </div>
      <div>
        {" "}
        <img
          className={styles.footImg}
          alt="Whatsapp"
          src={require("./whatsapp.png")}
        ></img>
        <img
          className={styles.footImg}
          alt="Linkedin"
          src={require("./linkedin.png")}
        ></img>
        <img
          className={styles.footImg}
          alt="GitHub"
          src={require("./github.png")}
        ></img>
        <img
          className={styles.footImg}
          alt="FlechaArr"
          src={require("./flecha-hacia-arriba.png")}
        ></img>
      </div>
    </footer>
  );
};

export default Footer;
