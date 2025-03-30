import styles from "./Footer.module.css";
import githubImg from "../../images/footer/github.png";
import logoImg from "../../images/logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="conteiner">
        <div className={styles.footer__row}>
          <Image src={logoImg} alt="logo" width={61} />

          <p className={styles.footer__develop}>
            Developed by{" "}
            <a
              className={styles.link}
              target="_blank"
              href="https://github.com/Mag1sstr"
            >
              Karachev
            </a>
          </p>
          <a target="_blank" href="https://github.com/Mag1sstr">
            <Image src={githubImg} alt="github" width={36} />
          </a>
        </div>
      </div>
    </footer>
  );
}
