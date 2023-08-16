import styles from "./advantages.module.css";
import { AdvantagesList } from "./AdvantagesList";

export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className="container">
        <h2>В чому наша перевага</h2>
        <p>
          LogiUkr - український логістичний бізнес. Ми пропонуємо широкий спектр
          послуг у галузі логістики, спрямованих на ефективне та надійне
          управління поставками, забезпечення оптимальних рішень та задоволення
          потреб наших клієнтів.
        </p>
        <AdvantagesList />
      </div>
    </div>
  );
};
