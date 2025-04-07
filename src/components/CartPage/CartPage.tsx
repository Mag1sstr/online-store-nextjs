"use client";
import Button from "@/UI/Button/Button";
import styles from "./CartPage.module.css";
import CartItem from "../CartItem/CartItem";
import { useAppSelector } from "@/store/store";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import { redirect } from "next/navigation";

export default function CartPage() {
  const [openModal, setOpenModal] = useState(false);

  const { cart } = useAppSelector((state) => state.cart);
  const totalPrice = cart.reduce((acc, v) => acc + v.price * v.count, 0);
  const { user } = useAppSelector((state) => state.user);

  return (
    <section className={styles.cart}>
      <LoginModal open={openModal} setOpen={setOpenModal} />
      <div className="conteiner">
        <div className={styles.inner}>
          {!user && (
            <div className={styles.err}>
              Login to your account
              <Button onClick={() => setOpenModal(true)} fontWeight={500}>
                Login
              </Button>
            </div>
          )}
          {cart.length > 0 ? (
            <>
              <div>
                <h3 className={styles.title}>Your cart</h3>
                <div className={styles.col}>
                  {cart.map((item) => (
                    <CartItem key={item.id} {...item} cart={cart} />
                  ))}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.total}>
                  TOTAL PRICE: <span>{totalPrice}$</span>
                </div>
                <Button>Proceed to checkout</Button>
              </div>
            </>
          ) : (
            <div className={styles.err}>
              Your cart is empty
              <Button onClick={() => redirect("/")}>Return to shopping</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
