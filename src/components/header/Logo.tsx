import logo from "./../../assets/logo.svg";
import styles from "./header.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img
        src={logo}
        className={`${styles.logo__image} noselect`}
        draggable="false"
      />
      <h1 className={`${styles.logo__text} noselect`}>LogiUkr</h1>
    </div>
  );
};

export default Logo;
