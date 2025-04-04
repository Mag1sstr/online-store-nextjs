import styles from "./Button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
  background?: string;
  color?: string;
}

export default function Button({
  children,
  onClick,
  width,
  background = "var(--btn-color)",
  color = "#fff",
}: IButtonProps) {
  return (
    <button
      style={{ width, background, color }}
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
