"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Categories from "@/components/Categories/Categories";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import { useGetProductsQuery } from "@/api/shopApi";

export default function Home() {
  const { data: products } = useGetProductsQuery(null);
  return (
    <div className={styles.page}>
      <div className="conteiner">
        <section className={styles.categories}>
          <div className={styles.row}>
            <Categories />
            <InfoBlock />
          </div>
        </section>
        <SectionWrapper title="Products" data={products} amount={5} />
      </div>
    </div>
  );
}
