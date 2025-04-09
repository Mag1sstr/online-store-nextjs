"use client";

import { useAppSelector } from "@/store/store";
import styles from "./LikesPage.module.css";
export default function LikesPage() {
  const { likes } = useAppSelector((state) => state.like);
  console.log(likes);

  return (
    <section className={styles.like}>
      <div className="conteiner">
        <div className={styles.inner}>
          <h1>Likes</h1>
        </div>
      </div>
    </section>
  );
}
