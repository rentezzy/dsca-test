import { useState } from "react";
import { Button, Input } from "../../ui/Controls";
import styles from "./tracking.module.css";
import barcode from "../../assets/barcode.svg";
export const TrackingForm = () => {
  const [track, setTrack] = useState("");
  return (
    <div className={styles.tracking__form}>
      <p className={styles.tracking__text}>
        Введіть <strong>номер декларації</strong> в поле <br />і натисніть
        кнопку відстежити
      </p>
      <div className={styles.tracking__input}>
        <Input
          name="track"
          onChange={(e) => setTrack(e.target.value)}
          type="text"
          value={track}
          placeholder="Введіть трек номер вантажу"
        />
      </div>
      <div className={styles.tracking__button}>
        <Button
          onClick={() => {
            console.log("====Форму відстеження відправленно====");
            console.log("Номер декларації", track);
            setTrack("");
          }}
        >
          <img src={barcode} alt="" className={styles.tracking__image} />
          Відстежити вантаж
        </Button>
      </div>
    </div>
  );
};
