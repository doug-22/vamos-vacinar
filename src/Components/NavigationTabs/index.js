import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Tabs() {
    return (
        <div className="navigation-tabs">
          <Link to="/cadastrar-agendamento" className="navigation-link">Realizar agendamento</Link>
          <Link to="/" className="navigation-link">Agendamentos</Link>
        </div>
    );
}