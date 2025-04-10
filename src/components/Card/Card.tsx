"use client";

import Image from "next/image";
import styles from "./Card.module.css";
import { IProducts } from "@/types/interfaces";
import { redirect } from "next/navigation";
import likeImg from "../../images/card/like.png";
import { useAppDispatch } from "@/store/store";
import { MouseEvent, useState } from "react";
import { addLikeItem } from "@/store/likeSlice";
import { toast } from "react-toastify";

export default function Card({
  title,
  id,
  images,
  price,
  category,
  description,
}: IProducts) {
  const [added, setAdded] = useState(false);
  const dispatch = useAppDispatch();

  function likeClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    dispatch(addLikeItem({ title, id, price, category, images, description }));
    toast.success("Added to favorites");
    setAdded(true);
  }
  return (
    <div
      onClick={() => redirect(`/product/${id}`)}
      className={`${styles.card} ${added && styles.added__anim}`}
    >
      {!added && (
        <div onClick={(e) => likeClick(e)} className={styles.like__wrapper}>
          <Image className={styles.like} src={likeImg} alt="like" />
        </div>
      )}
      <div className={styles.wrapper}>
        <img src={images[0]} alt="" className={styles.img} />
      </div>
      <div className={styles.inner}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.category}>{category.name}</p>
        </div>
        <div className={styles.price}>{price}$</div>
      </div>
    </div>
  );
}
