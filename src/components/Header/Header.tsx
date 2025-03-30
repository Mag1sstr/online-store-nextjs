"use client";
import styles from "./Header.module.css";
import logoImg from "../../images/logo.svg";
import likeImg from "../../images/header/like.svg";
import cartImg from "../../images/header/cart.svg";
import searchImg from "../../images/header/search.svg";

import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="conteiner">
        <div className={styles.row}>
          <Image priority={true} src={logoImg} alt="logo" />

          <div className={styles.user}>
            <div className={styles.user__img}></div>
            Danil karachev
          </div>
          <div className={styles.search}>
            <Image src={searchImg} alt="search" />
            <input
              className={styles.input}
              type="text"
              placeholder="Search for anything..."
            />
          </div>
          <div className={styles.shop}>
            <Image src={likeImg} alt="like" />
            <div className={styles.cart}>
              <Image src={cartImg} alt="cart" />
              <div className={styles.amount}>0</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
