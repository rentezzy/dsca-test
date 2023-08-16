import { Socials } from "../../ui/Socials";
import Info from "./Info";
import WelcomeButtons from "./WelcomeButtons";
import WelcomeVideo from "./WelcomeVideo";
import styles from "./welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className="container flex_center_sb">
        <Info />
        <WelcomeVideo />
        <WelcomeButtons />
        <Socials theme="dark" className={styles.socials} />
      </div>
    </div>
  );
};

export default Welcome;
