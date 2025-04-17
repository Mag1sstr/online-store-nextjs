"use client";
import { IProducts } from "@/types/interfaces";
import styles from "./SectionWrapper.module.css";
import Card from "../Card/Card";
import Button from "@/UI/Button/Button";
import { Ref, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useGetProductsQuery } from "@/api/shopApi";
import { useDebounce } from "@/hooks/useDebouce";

interface IProps {
  title: string;
  children?: React.ReactNode;
  data?: IProducts[] | undefined;
  amount?: number;
  btn?: boolean;
  sort?: boolean;
  btnClick?: () => void;
  ref?: Ref<HTMLElement> | undefined;
}

export default function SectionWrapper({
  title,
  // data,
  amount,
  btn,
  sort,
  ref,
}: IProps) {
  const [value, setValue] = useState({
    from: "",
    to: "",
  });
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const { data } = useGetProductsQuery({
    title: debouncedSearch,
    price_min: value.from,
    price_max: value.to,
  });

  const [click, setClick] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages =
    data &&
    Math.ceil(
      sort === true
        ? data.filter((v) => v.price < 100).length / pageSize
        : data.length / pageSize
    );
  const startIndex = currentPage * pageSize - pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <section ref={ref} className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.filters}>
        <input
          className={styles.input}
          type="text"
          placeholder="Product name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="from"
          value={value.from}
          onChange={(e) =>
            setValue({
              ...value,
              from: e.target.value === "0" ? "1" : e.target.value,
            })
          }
        />
        <input
          className={styles.input}
          type="text"
          placeholder="to"
          value={value.to}
          onChange={(e) => setValue({ ...value, to: e.target.value })}
        />
      </div>

      <div className={styles.row}>
        {sort ? (
          <>
            {data &&
              data
                ?.filter((v) => v.price < 100)
                .slice(click ? startIndex : 0, click ? endIndex : amount)
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
