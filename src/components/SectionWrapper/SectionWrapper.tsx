"use client";
import { IProducts } from "@/types/interfaces";
import styles from "./SectionWrapper.module.css";
import Card from "../Card/Card";

interface IProps {
  title: string;
  children?: React.ReactNode;
  data: IProducts[] | undefined;
  amount?: number;
}

export default function SectionWrapper({ title, data, amount }: IProps) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.row}>
        {data &&
          data.slice(0, amount).map((item) => <Card key={item.id} {...item} />)}
      </div>
    </section>
  );
}
