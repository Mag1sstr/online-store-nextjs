"use client";
import { IProducts } from "@/types/interfaces";
import styles from "./SectionWrapper.module.css";
import Card from "../Card/Card";
import Button from "@/UI/Button/Button";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

interface IProps {
  title: string;
  children?: React.ReactNode;
  data: IProducts[] | undefined;
  amount?: number;
  btn?: boolean;
  sort?: boolean;
  btnClick?: () => void;
}

export default function SectionWrapper({
  title,
  data,
  amount,
  btn,
  sort,
  btnClick,
}: IProps) {
  const [click, setClick] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = data && Math.ceil(data.length / pageSize);
  const startIndex = currentPage * pageSize - pageSize;
  const endIndex = startIndex + pageSize;
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.row}>
        {sort ? (
          <>
            {data &&
              data
                ?.filter((v) => v.price < 100)
                .slice(0, amount)
                .map((item) => <Card key={item.id} {...item} />)}
          </>
        ) : (
          <>
            {data &&
              data
                .slice(click ? startIndex : 0, click ? endIndex : amount)
                .map((item) => <Card key={item.id} {...item} />)}
          </>
        )}
      </div>
      {click ? (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <>
          {btn && (
            <div className={styles.btn}>
              <Button onClick={() => setClick(true)}>See more</Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
