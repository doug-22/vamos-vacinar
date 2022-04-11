import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}