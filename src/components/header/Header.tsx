import Internalisation from "../../ui/Internalisation";
import Logo from "./Logo";
import Navigation from "./Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container flex_center_sb">
        <Logo />
        <div className={`${styles.subheader} flex_center_sb`}>
          <Navigation />
          <Internalisation />
        </div>
      </div>
    </div>
  );
};

export default Header;
