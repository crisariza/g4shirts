import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarAdmin.module.css";

export default function NavBarAdmin() {
  return (
    <div className={`${styles.uListContainer}`}>
      <ul className={`${styles.uList}`}>
        <li>
          <Link className={`${styles.leenk}`} to="/admin/products">
            Create product
          </Link>
        </li>
        <li>
          <Link className={`${styles.leenk}`} to="/admin/categories">
            Categories panel
          </Link>
        </li>
        <li>
          <Link className={`${styles.leenk}`} to="/admin/users">
            Users panel
          </Link>
        </li>
        <li>
          <Link className={`${styles.leenk}`} to="/admin/orders">
            Orders panel
          </Link>
        </li>
      </ul>
    </div>
  );
}
