import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Appointments from "./Pages/Appointments";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-agendamento" element={<Registration />}/>
        <Route path="/agendamentos" element={<Appointments />}/>
      </Routes>
    </BrowserRouter>
  );
}