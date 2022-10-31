import { MouseEventHandler } from "react";
import { navigation } from "../utils/navigation";
import { NavItem } from "./NavItem";

export interface NavigationItemsProps {
  onItemClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NavigationItems = ({ onItemClick, ...props }: NavigationItemsProps) => {
  return (
    <ul className="navigation-items">
      {navigation.map((navItem) => (
        <NavItem
          {...props}
          onClick={onItemClick}
          key={navItem.path}
          to={navItem.path}
          title={navItem.title}
          end={navItem.isEnd}
        />
      ))}
    </ul>
  );
};

export { NavigationItems };
