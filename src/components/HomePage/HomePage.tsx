"use client";
import styles from "./HomePage.module.css";
import Categories from "../Categories/Categories";
import InfoBlock from "../InfoBlock/InfoBlock";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { useRef } from "react";

export default function HomePage() {
  const sectionRef = useRef(null);
  console.log(sectionRef.current);

  return (
    <div className={styles.page}>
      <div className="conteiner">
        <section className={styles.categories}>
          <div className={styles.row}>
            <Categories />
            <InfoBlock sectionRef={sectionRef.current} />
          </div>
        </section>
        <SectionWrapper ref={sectionRef} title="Products" amount={5} btn />
        <SectionWrapper title="Less than 100$" amount={10} sort btn />
      </div>
    </div>
  );
}
