import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

import "./styles.css";
import Image from "../../Assets/Image2.jpg";
import imageSuccess from "../../Assets/success.jpg";
import imageNotSuccess from "../../Assets/not-success.jpg";

import Header from "../../Components/Header";
import NavigationTabs from "../../Components/NavigationTabs";
import Form from "../../Components/Form";

export default function Registration() {

  const currentLocation = useLocation();
  const navigate = useNavigate();
  const [registered, setRegistered] = useState();

  const handleSubmit = (values) => {
    Axios.post("http://localhost:8080/api/cadastro", values)
    .then((response) => {
      setRegistered(!response.data.error);
    }).catch((error) => {
      setRegistered(!error.response.data.error);
    });
  }
  const initialValues = {
    name: "",
    birthDate: "",
    dateAppointment: "",
    time: "",
    vaccinated: false
  };

  const redirectAppointmentsPage = () => {
    navigate("/agendamentos")
    setRegistered(registered)
  }
  if(registered) {
    setTimeout(redirectAppointmentsPage, 1000*1.5);
  }

  return (
    <>
      <Header />
      <NavigationTabs location={currentLocation.pathname} />
      <div className="box-form">
        <img src={Image} alt="Imagem homem adulto sendo vacinado"/>
        <div>
          <Form handleSubmit={handleSubmit} initialValues={initialValues} />
          {registered &&
            <div className="box-result-appointment">
              <h3 className="message-success">Agendamento cadastrado com sucesso!</h3>
              <img src={imageSuccess} alt="Imagem agendamento cadastrado com sucesso!"/>
            </div>
          }
          {registered === false &&
            <div className="box-result-appointment">
              <h3 className="message-not-success">Limite de vagas alcançado, tente outra data!</h3>
              <img src={imageNotSuccess} alt="Imagem agendamento cadastrado com sucesso!"/>
            </div>
          }
        </div>
      </div>
    </>
  );
}