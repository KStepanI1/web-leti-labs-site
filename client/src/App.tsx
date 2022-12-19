import "normalize.css";
import "highlight.js/styles/color-brewer.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { APP_ROUTES_CONFIG } from "./utils/constants";
import { ToastContainer } from "react-toastify";
import ResultViewer from "./pages/ResultViewer";
import { useEffect } from "react";
import Layout from "./pages/Layout";
import { Loader } from "./components/Loader";

const LabPage = React.lazy(() => import("./pages/LabPage"));
const NewLab = React.lazy(() => import("./pages/NewLab"));

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
          <Route path={APP_ROUTES_CONFIG.newLab.path} element={<Suspense fallback={<Loader size="medium" />}><NewLab /></Suspense>} />
          <Route path={APP_ROUTES_CONFIG.lab.path} element={<Suspense fallback={<Loader size="medium" />}><LabPage /></Suspense>} />
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
