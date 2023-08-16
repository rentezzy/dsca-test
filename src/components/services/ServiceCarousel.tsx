import Button from "../../ui/Button";
import { Carousel } from "../../ui/Carousel";
import styles from "./services.module.css";

type CardInfo = {
  title: string;
  info: {
    type: string;
    size: string;
  };
};
const cardInfo = [
  {
    title: "До 2-3 тонн",
    info: {
      type: "тент, рефрижератор, ізотерм, відкритий",
      size: "4.5м / 2м / 2м",
    },
  },
  {
    title: "До 5 тонн",
    info: {
      type: "тент, рефрижератор, ізотерм, відкритий",
      size: "7м / 2.5м / 3м",
    },
  },
  {
    title: "До 10 тонн",
    info: {
      type: "тент, рефрижератор, ізотерм, відкритий",
      size: "8м / 2.5м / 3м",
    },
  },
];

export const ServiceCarousel = () => {
  return (
    <div>
      <Carousel>
        <CarouselElement info={cardInfo} />
        <CarouselElement info={cardInfo} />
        <CarouselElement info={cardInfo} />
      </Carousel>
    </div>
  );
};

const CarouselElement = ({ info }: { info: CardInfo[] }) => {
  return (
    <div className={styles.cards}>
      <CarouselCard info={info[0]} />
      <CarouselCard info={info[1]} />
      <CarouselCard info={info[2]} />
    </div>
  );
};

const CarouselCard = ({ info }: { info: CardInfo }) => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardInfo__image}>
        {/* <img src="" alt="" /> */}
      </div>
      <div className={styles.cardInfo__text}>
        <h3 className={styles.cardInfo__title}>{info.title}</h3>
        <div className={styles.cardInfo__info}>
          <p>Тип кузова: {info.info.type}</p>
          <p>Д/Ш/В: {info.info.size}</p>
        </div>
      </div>
      <div className={styles.cardInfo__button}>
        <Button>Замовити машину</Button>
      </div>
    </div>
  );
};
