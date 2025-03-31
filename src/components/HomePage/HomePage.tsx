"use client";
import { useGetProductsQuery } from "@/api/shopApi";
import styles from "./HomePage.module.css";
import Categories from "../Categories/Categories";
import InfoBlock from "../InfoBlock/InfoBlock";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function HomePage() {
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
        <SectionWrapper title="Products" data={products} amount={5} btn />
        <SectionWrapper
          title="Less than 100$"
          data={products}
          amount={5}
          btn
          sort
        />
      </div>
    </div>
  );
}
