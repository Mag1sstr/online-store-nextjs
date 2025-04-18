"use client";
import { useGetCategoriesQuery } from "@/api/shopApi";
import styles from "./Categories.module.css";
import { redirect } from "next/navigation";

export default function Categories() {
  const { data: categories } = useGetCategoriesQuery(null);

  return (
    <div className={styles.left}>
      <div>
        <h3 className={styles.title}>CATEGORIES</h3>
        <ul className={styles.col}>
          {categories &&
            categories.map((item) => (
              <li
                onClick={() => redirect(`/category/${item.slug}`)}
                key={item.id}
                className={styles.item}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.help}>
        <span>Help</span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  );
}
