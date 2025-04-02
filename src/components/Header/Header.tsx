"use client";
import styles from "./Header.module.css";
import logoImg from "../../images/logo.svg";
import likeImg from "../../images/header/like.svg";
import cartImg from "../../images/header/cart.svg";
import searchImg from "../../images/header/search.svg";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store/store";

export default function Header() {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <header className={styles.header}>
      <div className="conteiner">
        <div className={styles.row}>
          <Link href="/">
            <Image priority={true} src={logoImg} alt="logo" />
          </Link>

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
              <Link href="/cart">
                <Image src={cartImg} alt="cart" />
              </Link>
              <div className={styles.amount}>{cart.length}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
