import React from "react";
import { createRoot } from "react-dom/client"; // Correct import

import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { Content } from "./Pages/Content.jsx";

// Create the root element with createRoot from "react-dom/client"
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
