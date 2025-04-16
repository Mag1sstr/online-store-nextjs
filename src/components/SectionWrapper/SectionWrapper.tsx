"use client";
import { IProducts } from "@/types/interfaces";
import styles from "./SectionWrapper.module.css";
import Card from "../Card/Card";
import Button from "@/UI/Button/Button";
import { Ref, useState } from "react";
import Pagination from "../Pagination/Pagination";

interface IProps {
  title: string;
  children?: React.ReactNode;
  data: IProducts[] | undefined;
  amount?: number;
  btn?: boolean;
  sort?: boolean;
  btnClick?: () => void;
  ref?: Ref<HTMLElement> | undefined;
}

export default function SectionWrapper({
  title,
  data,
  amount,
  btn,
  sort,
  ref,
}: IProps) {
  const [click, setClick] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = data && Math.ceil(data.length / pageSize);
  const startIndex = currentPage * pageSize - pageSize;
  const endIndex = startIndex + pageSize;

  const [value, setValue] = useState({
    from: "0",
    to: "60",
  });
  return (
    <section ref={ref} className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>

      <input type="text" placeholder="from" value={value.from} />
      <input type="text" placeholder="to" value={value.to} />
      <button>Find</button>

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
