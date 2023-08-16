import styles from "./ui.module.css";
import world from "./../assets/world.svg";
import arrow from "./../assets/arrow.svg";

const Internalisation = () => {
  return (
    <div className={styles.internalisation}>
      <img src={world} alt="" className="noselect" />
      <img src={arrow} alt="" className="noselect" />
    </div>
  );
};

export default Internalisation;
