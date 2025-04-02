import Image from "next/image";
import styles from "./Card.module.css";
import { IProducts } from "@/types/interfaces";
import { redirect } from "next/navigation";

export default function Card({
  title,
  id,
  images,
  price,
  category,
}: IProducts) {
  return (
    <div onClick={() => redirect(`/product/${id}`)} className={styles.card}>
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
