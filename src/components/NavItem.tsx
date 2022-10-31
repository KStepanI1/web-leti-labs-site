import { NavLinkProps } from "react-router-dom";
import { NavLink } from "react-router-dom";

export interface NavItemProps extends NavLinkProps {
  title: string;
}

const NavItem = ({ title, ...props }: NavItemProps) => {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          `nav-item__link${isActive ? " -active" : ""}`
        }
        {...props}
      >
        {title}
      </NavLink>
    </li>
  );
};

export { NavItem };
