import styles from "./ui.module.css";

interface IProps {
  children: React.ReactNode;
}

const Button = ({ children }: IProps) => {
  return <button className={`${styles.button} noselect`}>{children}</button>;
};

export default Button;
