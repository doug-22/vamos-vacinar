import React from "react";
import { documentTitle } from "../../Utils/documentTitle";

import "./styles.css";
import Image1 from "../../Assets/Title.svg";
import Image2 from "../../Assets/Image1.jpg";

import Button from "../../Components/Button";

export default function Home() {

  documentTitle("");

  return(
    <>
      <div className="container-menu">
        <div className="container-info">
          <img src={Image1} alt="Título Vacinação COVID-19"/>
          <h1 style={{fontSize: "30px"}}>Bem Vindo!</h1>
          <p>
            Aquele pedacinho de plástico com uma agulha representa muito mais do que uma picada, mas a esperança por dias melhores.
          </p>
          <Button link={"/cadastrar-agendamento"} content={"Agendar vacinação"}/>
        </div>
        <img src={Image2} alt="Ilustração de uma criança sendo vacinada"/>
      </div>
    </>
  );
}