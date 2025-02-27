import Logo from "../../assets/Logo";
import NotLogged from "../../assets/NotLogged";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Logo className={styles.icons} />
      </div>
      <div className={styles.navContainer}>
        <button className={styles.navButton}>Projects</button>
        <button className={styles.navButton}>Timesheet</button>
        <button className={styles.navButton}>About</button>
      </div>
      <div className={styles.profileContainer}>
        <NotLogged className={styles.icons} />
      </div>
    </div>
  );
};

export default Navbar;
