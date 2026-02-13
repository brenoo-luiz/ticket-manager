import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

/**
 * Application entry point (Vite).
 *
 * - Gets the <div id="root"> element from index.html
 * - Create the React "root"
 * - Renders the tree:
 *    StrictMode, BrowserRouter, App
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
