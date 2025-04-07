"use client";
import Image from "next/image";
import styles from "./InfoBlock.module.css";
import compImg from "../../images/comp.png";
import Button from "@/UI/Button/Button";
import { Ref } from "react";

interface IProps {
  sectionRef?: HTMLDivElement | null | undefined;
}

export default function InfoBlock({ sectionRef }: IProps) {
  return (
    <div className={styles.info}>
      <h2 className={styles.sale}>BIG SALE 20%</h2>
      <div className={styles.block}>
        <div className={styles.col}>
          <p className={styles.text}>the bestseller of 2022</p>
          <p className={styles.title}>LENNON r2d2 with NVIDIA 5090 TI</p>
        </div>
        <Button
          onClick={() => {
            sectionRef?.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          }}
        >
          Shop Now
        </Button>
      </div>
      <Image className={styles.img} src={compImg} alt="computer" />
    </div>
  );
}
