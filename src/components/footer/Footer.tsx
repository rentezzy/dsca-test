import styles from "./footer.module.css";
import mail from "../../assets/social/mail.svg";
import map from "../../assets/social/map.svg";
import phone from "../../assets/social/phone.svg";
import { Socials } from "../../ui/Socials";
interface IFooterCard {
  image: string;
  text: string;
}
const cards: IFooterCard[] = [
  {
    image: phone,
    text: "+38(066)111-22-33",
  },
  {
    image: mail,
    text: "LogiUkr@gmail.com",
  },
  {
    image: map,
    text: "Харків, вул. Героїв Харкова, 20",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2>Контакти</h2>
        <div className={styles.footer__list}>
          {...cards.map((card) => <FooterCard card={card} />)}
          <Socials theme="light" className={styles.footer_socials} />
        </div>
      </div>
    </footer>
  );
};
const FooterCard = ({ card }: { card: IFooterCard }) => {
  return (
    <div className={styles.footer__card}>
      <img src={card.image} alt="" />
      <p>{card.text}</p>
    </div>
  );
};
