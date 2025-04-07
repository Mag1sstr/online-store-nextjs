"use client";
import styles from "./Header.module.css";
import logoImg from "../../images/logo.svg";
import likeImg from "../../images/header/like.svg";
import cartImg from "../../images/header/cart.svg";
import searchImg from "../../images/header/search.svg";

import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebouce";
import { useGetProductsByTitleQuery } from "@/api/shopApi";
import { redirect } from "next/navigation";
import LoginModal from "../LoginModal/LoginModal";
import { getUser } from "@/store/userSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  // dispatch(getUser());

  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue);
  const { data } = useGetProductsByTitleQuery(debounceValue);
  const { cart } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.user);
  return (
    <header className={styles.header}>
      <LoginModal open={openModal} setOpen={setOpenModal} />
      <div className="conteiner">
        <div className={styles.row}>
          <Link href="/">
            <Image priority={true} src={logoImg} alt="logo" />
          </Link>
          {user ? (
            <div className={styles.user}>
              <div className={styles.user__img}></div>
              {`${user.name}(${user.email})`}
            </div>
          ) : (
            <div className={styles.login} onClick={() => setOpenModal(true)}>
              Login
            </div>
          )}
          <div className={styles.search}>
            <Image src={searchImg} alt="search" />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.input}
              type="text"
              placeholder="Search for anything..."
            />
            <div
              className={`${styles.search__drop} ${
                searchValue.trim() && styles.drop
              }`}
            >
              <div className={styles.drop__col}>
                {data ? (
                  data.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSearchValue("");
                        redirect(`/product/${item.id}`);
                      }}
                      className={styles.drop__item}
                    >
                      <img
                        className={styles.drop__img}
                        src={item.images[0]}
                        alt={item.title}
                      />{" "}
                      {item.title}
                    </div>
                  ))
                ) : (
                  <div>Not found</div>
                )}
              </div>
            </div>
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
