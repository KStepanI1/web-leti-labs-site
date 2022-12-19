import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import {BrowserRouter, HashRouter} from "react-router-dom";

const rootElement = document.getElementById("root");

// noinspection JSCheckFunctionSignatures
const root = ReactDOM.createRoot(rootElement);

root.render(<React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</React.StrictMode>);

