import React from "react";
import { Formik, ErrorMessage, Form as FormFormik, Field } from "formik";

import schema from "./schema";
import DatePickerForm from "../DatePickerForm";

import "./styles.css";
import TitleForm from "../../Assets/Title-form.svg";


export default function Form({handleSubmit, initialValues}) {
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
        <FormFormik>
          <div className="container-form">
            <img src={TitleForm} alt="Realizar agendamento"/>
            <div className="container-input">
              <div className="content-input">
                <p>Seu nome:</p>
                <Field name="name" placeholder="Nome" type="text"/>
              </div>
              <ErrorMessage className="message-error" component="span" name="name"/>
              <div className="content-input">
                <p>Data de nascimento:</p>
                <DatePickerForm name={"birthDate"} placeholder={"Selecione a data"}/>
              </div>
              <ErrorMessage className="message-error" component="span" name="birthDate" />
              <div className="content-input">
                <p>Agendar vacina para o dia:</p>
                <DatePickerForm name={"dateAppointment"} placeholder={"Selecione o dia"}/>
              </div>
              <ErrorMessage className="message-error" component="span" name="dateAppointment" />
              <div className="content-input">
                <p>Qual horário:</p>
                <Field as="select" name="time" className="input-select">
                  <option value="---">---</option>
                  <option value="7:00">7:00</option>
                  <option value="8:00">8:00</option>
                  <option value="9:00">9:00</option>
                </Field>
              </div>
              <ErrorMessage className="message-error" component="span" name="time" />
              <button className="button" type="submit">Agendar</button>
            </div>
          </div>
        </FormFormik>
    </Formik>
  );
}