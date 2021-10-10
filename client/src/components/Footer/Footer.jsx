import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.list1}>
          <li>
            <i className="fas fa-map-marker-alt"></i> Av. Libertador 3529
          </li>
          <li>
            <i className="fab fa-whatsapp"></i> 11 3444 9288
          </li>
          <li>
            <i className="far fa-envelope"></i> support@4gshirts.com
          </li>
        </ul>
      </div>

      <div>
        <ul className={styles.list2}>
          <h1>About G4 Shirts</h1>
          <li>
            Made by{" "}
            <a href="https://www.linkedin.com/in/crisariza/">Cristian Ariza</a>,{" "}
            <a href="https://www.linkedin.com/in/mateo-francisco-figueroa-b52b78191/">
              Mateo Figueroa
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/martin-mamani-a6aab41a5/">
              Martín Mamani
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/jose-lerma-10b5281b1/">
              José Lerma
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/franciscosabategarrido/">
              Francisco Sabaté
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/santiago-sosa-4081121b9/">
              Santiago Sosa
            </a>{" "}
            y León Meneses
          </li>
        </ul>
      </div>
    </div>
  );
}
