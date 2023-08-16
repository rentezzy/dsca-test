import styles from "./ui.module.css";
const NavLink = ({
  children,
  to,
  selected,
}: {
  children: React.ReactNode;
  to: string;
  selected: boolean;
}) => {
  return (
    <div className={`${styles.navLink} ${selected && styles.navLink_selected}`}>
      <a href={to}>{children}</a>
    </div>
  );
};

export default NavLink;
