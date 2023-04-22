import React from "react";
import styles from "./Contenido.module.css";

export const Contenido = () => {
  return (
    <>
      <div className={styles.contenido}>
        <div className={styles.sobreMi}>
          <h1 className={styles.desarrollador}>Front End Developer</h1>
        </div>
        <h2 className={styles.sobreMiLetra}>
          Hola! Soy Front-End Developer en desarrollo, en busca de mis primeras
          experiencias en el mundo IT, estudiante de la plataforma Soy Henry, y
          autodidacta en Udemy.
        </h2>
      </div>
    </>
  );
};

export const Proyectos = () => {
  return (
    <>
      <div className={styles.proyectos}>
        <h3 id="proyectos" className={styles.misProyectos}>
          Mis Proyectos
        </h3>
      </div>
    </>
  );
};

export const Conocimientos = () => {
  return (
    <>
      <div className={styles.Conocimientos}>
        <h3 id="conocimientos" className={styles.misConocimientos}>
          Mis Conocimientos
        </h3>
        <div className={styles.containerImagenes}>
          <img
            className={styles.conocimientosImagenes}
            alt="HTML"
            src={require("./imagens/html-5.png")}
          ></img>
          <img
            className={styles.conocimientosImagenes}
            alt="CSS"
            src={require("./imagens/css-3.png")}
          ></img>
          <img
            className={styles.conocimientosImagenes}
            alt="REACT"
            src={require("./imagens/react.png")}
          ></img>
          <img
            className={styles.conocimientosImagenes}
            alt="JavasCript"
            src={require("./imagens/java-script.png")}
          ></img>
          <img
            className={styles.conocimientosImagenes}
            alt="Bootstrap"
            src={require("./imagens/bootstrap.png")}
          ></img>
        </div>
      </div>
    </>
  );
};
