import NavLink from "../../ui/NavLink";

const routes = [
  { id: 1, text: "Про нас", selected: true },
  { id: 2, text: "Послуги", selected: false },
  { id: 3, text: "Замовлення перевезень", selected: false },
  { id: 4, text: "Відстеження ", selected: false },
  { id: 5, text: "Відгуки", selected: false },
  { id: 6, text: "Питання", selected: false },
];

const Navigation = () => {
  return (
    <div className="flex_center_sb">
      {routes.map((route) => (
        <NavLink to="/" selected={route.selected} key={route.text}>
          {route.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Navigation;
