import styles from "./welcome.module.css";
import Button from "../../ui/Button";
import play from "../../assets/play.svg";

const WelcomeButtons = () => {
  return (
    <div className={styles.buttons}>
      <div>
        <div className={styles.buttons__info}>
          <Button>Розрахувати вартість</Button>
        </div>
      </div>
      <div>
        <div className={styles.buttons__play}>
          <Button>
            <img className="noselect" src={play} alt="" draggable="false" />
          </Button>
        </div>
        <p>
          Подивитися відео <br />
          про LogiUkr
        </p>
      </div>
    </div>
  );
};

export default WelcomeButtons;
