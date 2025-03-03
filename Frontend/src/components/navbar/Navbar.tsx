import NotLogged from "../../assets/NotLogged.svg";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt="Logo" />
      <div className={styles.buttons}>
        <a>Projects</a>
        <a>Timesheet</a>
        <a>About</a>
      </div>
      <img src={NotLogged} alt="NotLogged" />
    </div>
  );
};

export default Navbar;
