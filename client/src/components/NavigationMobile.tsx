import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../utils/navigation";
import { NavigationItems } from "./NavigationItems";
import { useClickOutside } from "../hooks/useClickOutside";
import { Icon } from "./Icon";

const NavigationMobile = () => {
  const location = useLocation();
  const [currentPathname, setCurrentPathname] = useState(location.pathname);
  const [open, setOpen] = useState(false);

  const handleCloseNav = () => {
    setOpen(false)
    document.body.classList.remove('fixed-position')
  }

  const handleOpenNav = () => {
    setOpen(true)
    document.body.classList.add('fixed-position')
  }

  const navRef = useClickOutside(handleCloseNav)

  const toggleNavStatus = () => {
    if (open) {
      handleCloseNav()
    } else {
      handleOpenNav()
    }
  };

  const handleClickNavItem = () => {
    handleCloseNav()
  }

  useEffect(() => {
    setCurrentPathname(location.pathname);
  }, [location]);

  return (
    <div className={`navigation-mobile__background${open ? " active" : ""}`}>
      <nav ref={navRef} className={`navigation-mobile${open ? " open" : ""}`}>
        <div className="navigation-mobile__current" onClick={toggleNavStatus}>
          <div className='navigation-mobile__arrow'> <Icon name={'ShortArrow'} color='var(--gray-40)' /> </div>
          {navigation.find((navItem) => navItem.path === currentPathname)
            ?.title || ""}
        </div>
        {open && <NavigationItems onItemClick={handleClickNavItem} />}
      </nav>
    </div>
  );
};

export { NavigationMobile };
