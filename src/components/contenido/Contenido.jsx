import React from "react";
import styles from "./Contenido.module.css";

const Contenido = () => {
  return (
    <>
      <div className={styles.contenido}>
        <div>
          <h1 className={styles.desarrollador}>
            <>
              Cabrera Juan,
              <br /> Front End Developer y <br /> Maquetador Web
            </>
          </h1>
        </div>
        <div className={styles.sobreMi}>
          <h2>
            Hola! soy Juan, Front-End Developer en desarrollo,en busca de mis
            primeras experiencias en el mundo IT, estudiante de la plataforma
            Soy Henry, y autodidacta en Udemy.
          </h2>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Contenido;
