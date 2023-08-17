import { usePricesForm } from "../../hooks/usePricesForm";

import { Input, Range, Button } from "../../ui/Controls";
import styles from "./prices.module.css";

export const PricesForm = () => {
  const form = usePricesForm();

  return (
    <div className={styles.form}>
      <div className={styles.form__inputBlock}>
        <div className={styles.form__inputBig}>
          <Input {...form.from} type="text" label="Звідки:" />
        </div>
        <div className={styles.form__inputBig}>
          <Input {...form.to} type="text" label="Куди:" />
        </div>
        <div className={styles.form__inputBig}>
          <Input {...form.type} type="text" label="Тип вантажу:" />
        </div>
      </div>
      <div className={styles.form__rangeBlock}>
        <div className={styles.form__range}>
          <Range
            {...form.weight}
            label="Вага вантажу (тонн):"
            from={0.05}
            to={100}
          />
        </div>
        <div className={styles.form__size}>
          <p>Габарити (м):</p>
          <div className={styles.form__size__inputs}>
            <div className={styles.form_inputSmall}>
              <Input type="number" {...form.width} />
            </div>
            <p>×</p>
            <div className={styles.form_inputSmall}>
              <Input type="number" {...form.height} />
            </div>
            <p>×</p>
            <div className={styles.form_inputSmall}>
              <Input type="number" {...form.length} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.form__button}>
        <Button onClick={() => form.submit()}>Розрахувати вартість</Button>
      </div>
    </div>
  );
};
