import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Appointments from "./Pages/Appointments";
import Management from "./Pages/Management";
import Header from "./Components/Header";
import NavigationTabs from "./Components/NavigationTabs";

export default function App() {

  return (
    <BrowserRouter>
      <Header/>
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-agendamento" element={<Registration />}/>
        <Route path="/agendamentos" element={<Appointments />}/>
        <Route path="/agendamentos/gerenciar" element={<Management />}/>
      </Routes>
    </BrowserRouter>
  );
}