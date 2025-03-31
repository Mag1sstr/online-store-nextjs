"use client";
import Button from "@/UI/Button/Button";
import styles from "./CartPage.module.css";
import { useGetProductsQuery } from "@/api/shopApi";
import CartItem from "../CartItem/CartItem";

export default function CartPage() {
  const { data } = useGetProductsQuery(null);
  return (
    <section className={styles.cart}>
      <div className="conteiner">
        <div className={styles.inner}>
          <h3 className={styles.title}>Your cart</h3>
          <div className={styles.col}>
            {data && data.map((item) => <CartItem key={item.id} {...item} />)}
          </div>
          <div className={styles.row}>
            <div className={styles.total}>
              TOTAL PRICE: <span>198$</span>
            </div>
            <Button>Proceed to checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
