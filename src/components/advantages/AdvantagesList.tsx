import styles from "./advantages.module.css";
import bigcar from "./../../assets/adv/bigcar.svg";
import calendar from "./../../assets/adv/calendar.svg";
import car from "./../../assets/adv/car.svg";
import peoples from "./../../assets/adv/peoples.svg";
import time from "./../../assets/adv/time.svg";
import upload from "./../../assets/adv/upload.svg";

const advantages = [
  {
    id: 1,
    image: calendar,
    text: "10 років на логістичному ринку",
  },
  {
    id: 2,
    image: peoples,
    text: "> 300 постійних клієнтів",
  },
  {
    id: 3,
    image: time,
    text: "Доставка до 24 год. по Україні",
  },
  {
    id: 4,
    image: car,
    text: " > 200 тонн вантажу перевезено",
  },
  {
    id: 5,
    image: upload,
    text: "Працюємо з усіма видами вантажів",
  },
  {
    id: 6,
    image: bigcar,
    text: "Адаптація логістики під воєнний час",
  },
];

export const AdvantagesList = () => {
  return (
    <div className={styles.advantagesList}>
      {advantages.map((advantage) => (
        <Advantage
          img={advantage.image}
          key={advantage.id}
          text={advantage.text}
        />
      ))}
    </div>
  );
};
const Advantage = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className={styles.advantage}>
      <img src={img} className="noselect" draggable="false" alt="" />
      <p>{text}</p>
    </div>
  );
};
