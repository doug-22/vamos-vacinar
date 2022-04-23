import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Services/api";
import { documentTitle } from "../../Utils/documentTitle";

import "./styles.css";
import Image from "../../Assets/Image2.jpg";
import imageSuccess from "../../Assets/success.jpg";
import imageNotSuccess from "../../Assets/not-success.jpg";

import Form from "../../Components/Form";

export default function Registration() {

  documentTitle(" | Cadastro")

  const navigate = useNavigate();
  const [registered, setRegistered] = useState();

  const handleSubmit = async (values) => {
    let response = await Api.postRegister(values)
    setRegistered(response);
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
      <div className="box-form">
        <img src={Image} alt="Imagem homem adulto sendo vacinado"/>
        <div className="content-form">
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