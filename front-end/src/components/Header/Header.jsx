import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import styles from "./Header.module.css";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.photoTitle}>
        <picture>
          <source type="image/webp" srcSet="/img/banner.webp" />
          <source type="image/png" srcSet="/img/banner.png" />
          <img
            style={{ height: 90 }}
            className={styles.img}
            src="/img/banner.png"
            alt="Banner"
          />
        </picture>
        <Link
          className={`${styles.title}`}
          onClick={() => {
            dispatch(getProducts());
          }}
          to="/"
        >
          <div className={styles.bar}>
            <picture>
              <source type="image/webp" srcSet="/img/logo.webp" />
              <source type="image/png" srcSet="/img/logo.png" />
              <img
                src="/img/logo.png"
                alt="Logo"
                style={{ height: 90, width: 100 }}
              />
            </picture>
            <h2 className={styles.shirts}>Shirts</h2>
          </div>
        </Link>
      </div>
      <NavBar />
    </div>
  );
}
