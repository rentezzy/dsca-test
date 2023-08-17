import { TrackingForm } from "./TrackingForm";
import styles from "./tracking.module.css";

export const Tracking = () => {
  return (
    <div className={styles.tracking}>
      <div className="container">
        <h2>Відстеження вантажів</h2>
      </div>
      <div className={styles.tracking__content}>
        <div className={styles.tracking__map}></div>
        <TrackingForm />
      </div>
    </div>
  );
};
