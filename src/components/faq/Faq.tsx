import { Button } from "../../ui/Controls";
import styles from "./faq.module.css";
interface IFaq {
  question: string;
  answer: string;
}
const faqs: IFaq[] = [
  { question: "Які існують ризики при транспортуванні вантажу?", answer: "" },
  {
    question: "Які регіони України охоплюються вашими логістичними послугами?",
    answer: "",
  },
  { question: "Яким чином встановлюються тарифи на ваші послуги?", answer: "" },
  {
    question:
      "Чи маєте ви досвід роботи з особливими типами вантажів (наприклад, небезпечними)?",
    answer: "",
  },
  {
    question: "Чи надаєте ви страхування вантажу під час перевезень?",
    answer: "",
  },
];
export const Faq = () => {
  return (
    <div className={styles.faq}>
      <div className="container">
        <h2>Залишились запитання?</h2>
        <div className={styles.faq__list}>
          {...faqs.map((faq) => <FaqCard faq={faq} />)}
        </div>
        <div className={styles.faq__button}>
          <Button>Завантажити більше</Button>
        </div>
      </div>
    </div>
  );
};
// TODO: Add answers block and new questions loader
const FaqCard = ({ faq }: { faq: IFaq }) => {
  return (
    <div>
      <div className={styles.faq__card}>
        <p className={styles.faq__card__question}>{faq.question}</p>
        <p className={styles.faq__card__plus}>+</p>
      </div>
    </div>
  );
};
