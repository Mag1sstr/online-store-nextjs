import { ICart } from "@/types/interfaces";
import styles from "./CartItem.module.css";
import Image from "next/image";
import delImage from "../../images/del.svg";
import { MouseEvent } from "react";
import { useAppDispatch } from "@/store/store";
import { setCart } from "@/store/cartSlice";

interface IProps {
  cart: ICart[];
}

export default function CartItem({
  images,
  title,
  category,
  price,
  count,
  id,
  cart,
}: ICart & IProps) {
  const dispatch = useAppDispatch();
  function increase(id: number) {
    dispatch(
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        })
      )
    );
  }
  function decrease(id: number) {
    dispatch(
      setCart(
        cart.map((item) => {
          if (item.id === id && item.count > 1) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        })
      )
    );
  }
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
        <button onClick={() => decrease(id)}>-</button>
        <div className={styles.amount}>{count}</div>
        <button onClick={() => increase(id)}>+</button>
      </div>
      <div>
        <div className={styles.totalPrice}>{price * count}$</div>
        <Image src={delImage} alt="del" />
      </div>
    </div>
  );
}
