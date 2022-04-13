import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Tabs({location}) {
    return (
        <div className="navigation-tabs">
          <Link to="/cadastrar-agendamento" className={location === "/cadastrar-agendamento" ? "navigation-link-active" : "navigation-link"}>Realizar agendamento</Link>
          <Link to="/agendamentos" className={location === "/agendamentos" ? "navigation-link-active" : "navigation-link"}>Agendamentos</Link>
        </div>
    );
}