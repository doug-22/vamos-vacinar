import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./styles.css";

export default function Tabs() {

  const location = useLocation();

  return (
    <div className="navigation-tabs">
      <div>
        <Link to="/cadastrar-agendamento" className={location.pathname === "/cadastrar-agendamento" ? "navigation-link-active" : "navigation-link"}>Realizar agendamento</Link>
        <Link to="/agendamentos" className={location.pathname === "/agendamentos" ? "navigation-link-active" : "navigation-link"}>Agendamentos</Link>
      </div>
      {(location.pathname === "/agendamentos" || location.pathname === "/agendamentos/gerenciar") &&
        <Link to="/agendamentos/gerenciar" className={location.pathname === "/agendamentos/gerenciar" ? "navigation-link-active" : "navigation-link"}>Gerenciar</Link>
      }
    </div>
  );
}