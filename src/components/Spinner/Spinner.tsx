"use client";
import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  );
}
