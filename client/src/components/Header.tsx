import { Logo } from "./Logo";
import { NewLabButton } from "./NewLabButton";


const Header = () => {
  return (
    <header className="header">
      <Logo />
      <NewLabButton />
    </header>
  );
};

export { Header };
