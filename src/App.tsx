import "normalize.css";
import "highlight.js/styles/nord.css";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navigation } from "./components/Navigation";
import { FirstLab } from "./pages/FirstLab";
import { SecondLab } from "./pages/SecondLab";
import { APP_ROUTES_CONFIG } from "./utils/constants";
import { ThirdLab } from "./pages/ThirdLab";
import { FourthLab } from "./pages/FourthLab";
import { FirthLab } from "./pages/FirthLab";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main className="App__main">
        <Routes>
          <Route path={APP_ROUTES_CONFIG.home.path} element={<Home />} />
          <Route path={APP_ROUTES_CONFIG.lab1.path} element={<FirstLab />} />
          <Route path={APP_ROUTES_CONFIG.lab2.path} element={<SecondLab />} />
          <Route path={APP_ROUTES_CONFIG.lab3.path} element={<ThirdLab />} />
          <Route path={APP_ROUTES_CONFIG.lab4.path} element={<FourthLab />} />
          <Route path={APP_ROUTES_CONFIG.lab5.path} element={<FirthLab />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
