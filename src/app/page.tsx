// "use client";
import Image from "next/image";
import styles from "./page.module.css";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="conteiner">
        <div className={styles.categories}>
          <div className={styles.row}>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
