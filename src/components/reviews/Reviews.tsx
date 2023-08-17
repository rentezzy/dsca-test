import { Carousel } from "../../ui/Carousel";
import styles from "./reviews.module.css";

interface IReview {
  title: string;
  text: string;
  name: string;
  image: string;
  date: string;
}

const reviews: IReview[] = [
  {
    date: "19.02.2023",
    image: "",
    name: "Андрій",
    text: "Замовивши вантажоперевезення у компанії LogiUkr, я отримав дуже позитивний досвід співпраці. Весь процес, починаючи з контактування з їх командою до доставки вантажу, пройшов гладко і без проблем. Вантаж був доставлений точно вчасно, у цілості та недоторканності.",
    title: "Я дуже задоволений послугами!",
  },
];

export const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <h2>Відгуки</h2>
        <Carousel>
          <ReviewCard review={reviews[0]} />
          <ReviewCard review={reviews[0]} />
          <ReviewCard review={reviews[0]} />
          <ReviewCard review={reviews[0]} />
          <ReviewCard review={reviews[0]} />
        </Carousel>
      </div>
    </section>
  );
};
const ReviewCard = ({ review }: { review: IReview }) => {
  return (
    <div className={styles.review}>
      <div className={styles.review__image}></div>
      <div className={styles.review__body}>
        <div>
          <h5>{review.title}</h5>
          <p>{review.text}</p>
        </div>
        <div className={styles.review__body__info}>
          <p>{review.name}</p>
          <p>{review.date}</p>
        </div>
      </div>
    </div>
  );
};
