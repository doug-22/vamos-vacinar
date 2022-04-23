import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../Assets/Logo.svg";

export default function Header () {
    return (
      <header>
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Logo Vamos Vacinar"/>
          </Link>
        </div>
      </header>
    );
}