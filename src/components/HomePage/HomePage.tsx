"use client";
import { useGetProductsQuery } from "@/api/shopApi";
import styles from "./HomePage.module.css";
import Categories from "../Categories/Categories";
import InfoBlock from "../InfoBlock/InfoBlock";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { useAppDispatch, useAppSelector } from "@/store/store";
import axios from "axios";
import { getUser } from "@/store/userSlice";
import { useRef } from "react";

export default function HomePage() {
  // const dispatch = useAppDispatch();
  // dispatch(getUser());
  const { data: products } = useGetProductsQuery(null);
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
        <SectionWrapper
          ref={sectionRef}
          title="Products"
          data={products}
          amount={5}
          btn
        />
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
