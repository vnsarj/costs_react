import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.li}>
        <li >
          <FaFacebook />
        </li>
        <li >
          <FaInstagram />
        </li>
        <li >
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.span}>
        <span>Desenvolvido por Vinícius Araújo</span>
      </p>
    </footer>
  );
}

export default Footer;
