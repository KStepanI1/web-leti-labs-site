import { Link } from "react-router-dom";
import { APP_ROUTES_CONFIG } from "../utils/constants";

const Logo = () => {
  return (
    <Link className="logo" to={APP_ROUTES_CONFIG.home.path}>
      MyLabs
    </Link>
  );
};

export { Logo };
