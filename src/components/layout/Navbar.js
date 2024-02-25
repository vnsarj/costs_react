import { Link } from "react-router-dom";

import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "./../../img/costs_logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs"></img>
        </Link>
        <ul className={styles.ul}>
          
          <li className={styles.li}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link to="/project">Projetos</Link>
          </li>
          <li className={styles.li}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={styles.li}>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/newproject">Novo projeto</Link>
          </li> */}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
