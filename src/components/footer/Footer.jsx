import React from "react";
import styles from "./Footer.module.css";
import NavBar from "../navBar/NavigationBar";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.footP}>Creado por: Cabrera Juan Pablo</p>
      </div>
      <div>
        <a href={"https://wa.me/1173643862"} target="_blank">
          <img
            className={styles.footImg}
            alt="Whatsapp"
            src={require("./whatsapp.png")}
          ></img>
        </a>
        <a
          href={"https://linkedin.com/in/juan-pablo-cabrera-56b733259/"}
          target="_blank"
        >
          <img
            className={styles.footImg}
            alt="Linkedin"
            src={require("./linkedin.png")}
          ></img>
        </a>
        <a href={"https://github.com/cabrerajuan1441"} target="_blank">
          <img
            className={styles.footImg}
            alt="GitHub"
            src={require("./github.png")}
          ></img>
        </a>
        <a href="#nav">
          <img
            className={styles.footImg}
            alt="FlechaArr"
            src={require("./flecha-hacia-arriba.png")}
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
