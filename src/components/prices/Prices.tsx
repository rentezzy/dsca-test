import { PricesForm } from "./PricesForm";
import styles from "./prices.module.css";
export const Prices = () => {
  return (
    <div className={styles.prices}>
      <div className="container">
        <h2>
          Бажаєте розрахувати <br />
          вартість доставки?
        </h2>
        <PricesForm />
      </div>
      <div className={styles.prices_wideline}></div>
    </div>
  );
};
