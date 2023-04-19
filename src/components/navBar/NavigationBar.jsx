import React from "react";
import styles from "./NavigationBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.firstImage}>
        <img
          className={styles.secondImage}
          alt="web"
          src={require("./backend (1).png")}
        ></img>
      </div>
      <div className={styles.listaNav}>
        <div className={styles.navButtons}>
          <button className={styles.btnNav}>Proyectos</button>
          <button className={styles.btnNav}>Conocimientos</button>
          <button className={styles.btnNav}>Contacto</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

//font-family: "Permanent Marker", cursive;
