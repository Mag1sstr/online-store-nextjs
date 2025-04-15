import styles from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Not Found</p>
    </section>
  );
}
