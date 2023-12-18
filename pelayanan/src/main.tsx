import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Client from "./pages/client/Client";
import Admin from "./pages/admin/Admin";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Client />
      <Admin />
    </BrowserRouter>
  </React.StrictMode>
);
