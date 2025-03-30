"use client";
import { useGetCategoriesQuery } from "@/api/shopApi";
import styles from "./Categories.module.css";

export default function Categories() {
  const { data: categories } = useGetCategoriesQuery(null);
  //   console.log(data);

  return (
    <div className={styles.left}>
      <div>
        <h3 className={styles.title}>CATEGORIES</h3>
        <ul className={styles.col}>
          {categories &&
            categories.map((item) => (
              <li key={item.id} className={styles.item}>
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
