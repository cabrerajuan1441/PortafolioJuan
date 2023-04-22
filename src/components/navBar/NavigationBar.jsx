import React from "react";
import styles from "./NavigationBar.module.css";
import { Proyectos, Conocimientos } from "../contenido/Contenido";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.containerImage}>
        <img
          className={styles.secondImage}
          alt="web"
          src={require("./backend (1).png")}
        ></img>
      </div>
      <div className={styles.contenedorCabrera}>
        <h1 className={styles.cabreraJuan}>Cabrera Juan</h1>
      </div>
      <div id="nav" className={styles.listaNav}>
        <div className={styles.navButtons}>
          <button className={styles.btnNav}>
            <a href={"#proyectos"}> Proyectos</a>
          </button>
          <button className={styles.btnNav}>
            <a href={"#conocimientos"}> Conocimientos / Contacto</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
