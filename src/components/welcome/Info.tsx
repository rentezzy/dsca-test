import styles from "./welcome.module.css";
const Info = () => {
  return (
    <div className={styles.info}>
      <h2 className={styles.info__title}>
        Надійні логістичні <br />
        перевезення по Україні
        <br />
        <strong> від 50 кг до 100 тонн</strong>
      </h2>
      <p className={styles.info__subtitle}>
        Допоможемо скоротити витрати на <br />
        доставку та оптизимізувати логістику
      </p>
    </div>
  );
};

export default Info;
