import Link from "next/link";
import styles from "./Section.module.css";
import Button from "../../button/Button";

const Section = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a className={styles.nav_link}>Home</a>
      </Link>

      <Link href="/about">
        <a className={styles.nav_link}>About Us</a>
      </Link>

      <div className={styles.dropdown}>
        <span className={(styles.nav_link, styles.dropbtn)}>
          Services {"\u25BE"}
        </span>
        <div className={styles.dropdownContent}>
          <Link href="/services/massages">
            <a>Massages</a>
          </Link>
          <Link href="/services/mani_pedi">
            <a>Manicure & Pedicure</a>
          </Link>
        </div>
      </div>

      {/* <Link href="/login">
        <a className={styles.nav_link}>Login</a>
      </Link> */}

      {/* <Link href="/signup">
        <a className={styles.nav_link}>
          <Button value="Sign Up" />
        </a>
      </Link> */}
      <Link href="/bookapp">
        <a className={styles.nav_link}>
          <Button value="Book Now" />
        </a>
      </Link>
    </div>
  );
};

export default Section;
