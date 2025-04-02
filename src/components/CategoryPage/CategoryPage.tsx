"use client";
import styles from "./CategoryPage.module.css";
import { useParams } from "next/navigation";
import { useGetSingleCategoryProductsQuery } from "@/api/shopApi";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

export default function CategoryPage() {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleCategoryProductsQuery(String(slug));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className={styles.category}>
      <div className="conteiner">
        <div className={styles.inner}>
          <h3 className={styles.title}>
            {String(slug)[0].toUpperCase() + String(slug).slice(1)}
          </h3>
          <div className={styles.row}>
            {data ? (
              data.map((item) => <Card key={item.id} {...item} />)
            ) : (
              <div className={styles.error}>Not found</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
