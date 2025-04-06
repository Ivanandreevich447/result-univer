import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

//В LAYOUT задаем значения generate и тд

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <Link to="generate">Генерировать QR код</Link>
      <Link to="scan">Сканировать QR код</Link>
      <Link to="scanHistory">История сканирования </Link>
      <Link to="generateHistory">История генерирования</Link>
    </nav>
  );
};

export default Navigation;
