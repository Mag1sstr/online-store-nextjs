"use client";
import Image from "next/image";
import styles from "./LoginModal.module.css";
import closeImg from "../../images/close.svg";

interface IProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export default function LoginModal({ open, setOpen }: IProps) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`${styles.wrapper} ${open && styles.open}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.inner}>
          <Image
            onClick={() => setOpen(false)}
            className={styles.close}
            src={closeImg}
            alt=""
          />
          <h3 className={styles.title}>Register</h3>
        </div>
      </div>
    </div>
  );
}
