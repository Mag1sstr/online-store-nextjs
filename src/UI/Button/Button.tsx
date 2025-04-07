import styles from "./Button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
  background?: string;
  color?: string;
  fontWeight?: number;
}

export default function Button({
  children,
  onClick,
  width,
  background = "var(--btn-color)",
  color = "#fff",
  fontWeight = 600,
}: IButtonProps) {
  return (
    <button
      style={{ width, background, color, fontWeight }}
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
