import "normalize.css";
import "highlight.js/styles/color-brewer.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import {APP_ROUTES_CONFIG, BASE_URL} from "./utils/constants";
import { ToastContainer } from "react-toastify";
import FirstLab from "./pages/FirstLab";
import SecondLab from "./pages/SecondLab";
import ThirdLab from "./pages/ThirdLab";
import FourthLab from "./pages/FourthLab";
import FirthLab from "./pages/FirthLab";
import ResultViewer from "./pages/ResultViewer";
import { useEffect } from "react";
import Layout from "./pages/Layout";

// const FirstLab = React.lazy(() => import("./pages/FirstLab"));
// const SecondLab = React.lazy(() => import("./pages/SecondLab"));
// const ThirdLab = React.lazy(() => import("./pages/ThirdLab"));
// const FourthLab = React.lazy(() => import("./pages/FourthLab"));
// const FirthLab = React.lazy(() => import("./pages/FirthLab"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route element={<Layout />} path={APP_ROUTES_CONFIG.home.path}>
          <Route index element={<Home />} />
          <Route path={APP_ROUTES_CONFIG.lab1.path} element={<FirstLab />} />
          <Route path={APP_ROUTES_CONFIG.lab2.path} element={<SecondLab />} />
          <Route path={APP_ROUTES_CONFIG.lab3.path} element={<ThirdLab />} />
          <Route path={APP_ROUTES_CONFIG.lab4.path} element={<FourthLab />} />
          <Route path={APP_ROUTES_CONFIG.lab5.path} element={<FirthLab />} />
          <Route
            path={APP_ROUTES_CONFIG.resultViewer.path}
            element={<ResultViewer />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
