"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import styles from "./LikesPage.module.css";
import { redirect } from "next/navigation";
import Button from "@/UI/Button/Button";
import { addCart } from "@/store/cartSlice";
import { ICart, IProducts } from "@/types/interfaces";
import { setLikes } from "@/store/likeSlice";
import { toast } from "react-toastify";
import { MouseEvent } from "react";
export default function LikesPage() {
  const dispatch = useAppDispatch();
  const { likes } = useAppSelector((state) => state.like);

  function handleClick(event: MouseEvent<HTMLButtonElement>, item: ICart) {
    event.stopPropagation();
    dispatch(addCart({ ...item, count: 1 }));
    dispatch(setLikes(likes.filter((v) => v.id !== item.id)));
    toast.success("Added to cart");
  }
  return (
    <section className={styles.like}>
      <div className="conteiner">
        <div className={styles.inner}>
          <div className={styles.col}>
            {likes.map((item) => (
              <div
                onClick={() => redirect(`/product/${item.id}`)}
                key={item.id}
                className={styles.card}
              >
                <img className={styles.img} src={item.images[0]} alt="image" />
                <div className={styles.text}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.description}</p>
                </div>
                <span className={styles.category}>{item.category.name}</span>
                <span className={styles.price}>{item.price}$</span>
                <Button onClick={(event) => handleClick(event, item)}>
                  Add to cart
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
