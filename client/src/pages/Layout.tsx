import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { NavigationMobile } from "../components/NavigationMobile";

const Layout = () => {

  return (
    <div className="layout">
      <Header />
      <Navigation />
      <NavigationMobile />
      <main className="layout__outlet">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
