import styles from "./ui.module.css";
import world from "./../assets/world.svg";
import arrow from "./../assets/arrow.svg";

const Internalisation = () => {
  return (
    <div className={styles.internalisation}>
      <img src={world} alt="" />
      <img src={arrow} alt="" />
    </div>
  );
};

export default Internalisation;
