"use client";
import Button from "@/UI/Button/Button";
import styles from "./CartPage.module.css";
import CartItem from "../CartItem/CartItem";
import { useAppSelector } from "@/store/store";

export default function CartPage() {
  const { cart } = useAppSelector((state) => state.cart);
  const totalPrice = cart.reduce((acc, v) => acc + v.price * v.count, 0);
  return (
    <section className={styles.cart}>
      <div className="conteiner">
        <div className={styles.inner}>
          <h3 className={styles.title}>Your cart</h3>
          <div className={styles.col}>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} cart={cart} />
            ))}
          </div>
          <div className={styles.row}>
            <div className={styles.total}>
              TOTAL PRICE: <span>{totalPrice}$</span>
            </div>
            <Button>Proceed to checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
