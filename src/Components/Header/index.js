import React from "react";

import "./styles.css";
import Logo from "../../Assets/Logo.svg";

export default function Header () {
    return (
      <header>
        <div className="header-logo">
          <img src={Logo} alt="Logo Vamos Vacinar"/>
        </div>
      </header>
    );
}