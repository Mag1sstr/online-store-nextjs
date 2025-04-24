"use client";
import styles from "./HomePage.module.css";
import Categories from "../Categories/Categories";
import InfoBlock from "../InfoBlock/InfoBlock";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/store";
import { getUser, setToken } from "@/store/userSlice";

export default function HomePage() {
  const dispatch = useAppDispatch();

  const sectionRef = useRef(null);
  console.log(sectionRef.current);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setToken(localStorage.getItem("token")));
      dispatch(getUser(localStorage.getItem("token")));
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className="conteiner">
        <section className={styles.categories}>
          <div className={styles.row}>
            <Categories />
            <InfoBlock sectionRef={sectionRef.current} />
          </div>
        </section>
        <SectionWrapper
          ref={sectionRef}
          title="Products"
          amount={5}
          btn
          filters
        />
        <SectionWrapper title="Less than 100$" amount={10} sort btn />
      </div>
    </div>
  );
}
