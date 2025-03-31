import styles from "./Pagination.module.css";

interface IPaginationProps {
  totalPages: number | undefined;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: IPaginationProps) {
  return (
    <div className={styles.row}>
      {totalPages &&
        [...Array(totalPages)].map((_, i) => (
          <div
            key={i}
            className={`${styles.page} ${
              currentPage === i + 1 && styles.active
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </div>
        ))}
    </div>
  );
}
