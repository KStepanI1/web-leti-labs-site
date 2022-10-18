import { navigation } from "../utils/navigation";
import { NavItem } from "./NavItem";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__items">
        {navigation.map((navItem) => (
          <NavItem
            key={navItem.path}
            to={navItem.path}
            title={navItem.title}
            end={navItem.isEnd}
          />
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
