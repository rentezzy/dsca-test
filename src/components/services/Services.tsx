import { ServiceCarousel } from "./ServiceCarousel";
import styles from "./services.module.css";
export const Services = () => {
  return (
    <div className={styles.services}>
      <div className="container">
        <h2>Послуги</h2>
        <p>
          Наша міцна логістична інфраструктура та більше 4000 одиниць у
          сучасному автопарку LogiUkr: гарантія успішної доставки вашого
          вантажу!
        </p>
        <ServiceCarousel />
      </div>
    </div>
  );
};
