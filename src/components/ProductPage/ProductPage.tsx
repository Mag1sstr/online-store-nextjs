"use client";
import { useParams } from "next/navigation";
import styles from "./ProductPage.module.css";
import { useGetSingleProductQuery } from "@/api/shopApi";
import { useState } from "react";
import Button from "@/UI/Button/Button";
import Spinner from "../Spinner/Spinner";
import { useAppDispatch } from "@/store/store";
import { addCart } from "@/store/cartSlice";

export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(Number(id));
  const [currImage, setCurrImage] = useState(0);
  const dispatch = useAppDispatch();
  //   console.log(data);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className={styles.product}>
      <div className="conteiner">
        <div className={styles.inner}>
          <div className={styles.row}>
            <div className={styles.images__block}>
              <img
                className={styles.main__image}
                src={data?.images[currImage]}
                alt="img"
              />
              <div className={styles.images}>
                {data?.images.map((image, i) => (
                  <img
                    key={image}
                    className={styles.image}
                    src={image}
                    alt={image}
                    onClick={() => setCurrImage(i)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.info__block}>
              <h3 className={styles.title}>{data?.title}</h3>
              <p className={styles.price}>{data?.price}$</p>
              <p className={styles.category}>
                Category: <span>{data?.category.name}</span>
              </p>
              <p className={styles.text}>{data?.description}</p>
              <div className={styles.buttons}>
                <Button
                  onClick={() => dispatch(addCart({ ...data, count: 1 }))}
                >
                  Add to cart
                </Button>
                <Button>Add to favorites</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
