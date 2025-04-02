import { ICart } from "@/types/interfaces";
import styles from "./CartItem.module.css";
import Image from "next/image";
import delImage from "../../images/del.svg";

export default function CartItem({
  images,
  title,
  category,
  price,
  count,
}: ICart) {
  return (
    <div className={styles.item}>
      <div className={styles.row}>
        <img className={styles.img} src={images[0]} alt="" />
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.category}>{category.name}</p>
        </div>
      </div>
      <div className={styles.price}>{price}$</div>
      <div className={styles.counter}>
        <button>-</button>
        <div className={styles.amount}>{count}</div>
        <button>+</button>
      </div>
      <div>
        <div className={styles.totalPrice}>{price}$</div>
        <Image src={delImage} alt="del" />
      </div>
    </div>
  );
}
