import styles from "./ui.module.css";

interface IProps {
  children: React.ReactNode;
}

const Button = ({ children }: IProps) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
