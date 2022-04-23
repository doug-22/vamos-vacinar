import React, { useState } from "react";
import Api from "../../Services/api";
import { Formik, ErrorMessage, Form as FormFormik, Field } from "formik";
import utilFunctions from "../../Utils/util.functions";

import schema from "./schema";
import DatePicker from "react-datepicker";

import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import titleForm from "../../Assets/Title-form.svg";


export default function Form({handleSubmit, initialValues}) {

  const [hours, setHours] = useState([]);

  const handleSelectedDate = async (dateSelect) => {
    let date = utilFunctions.formatDate(dateSelect);
    let list = await Api.getListAppointments(date);
    setHours(utilFunctions.filterHours(list.attendanceTimes))
  }
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
        <FormFormik>
          <div className="container-form">
            <img src={titleForm} alt="Realizar agendamento"/>
            <div className="container-input">
              <div className="content-input-form">
                <p>Seu nome:</p>
                <Field name="name" placeholder="Nome" type="text"/>
              </div>
              <ErrorMessage className="message-error" component="span" name="name"/>
              <div className="content-input-form">
                <p>Data de nascimento:</p>
                <Field name="birthDate">
                  {({form, field}) => {
                    const {setFieldValue} = form
                    const { value } = field
                    return (
                      <DatePicker
                        id="birthDate"
                        selected={value}
                        onChange={date => setFieldValue("birthDate", date)}
                        placeholderText="Selecione a data"
                        dateFormat="dd/MM/yyyy"
                        />
                    );
                  }}
                </Field>
              </div>
              <ErrorMessage className="message-error" component="span" name="birthDate" />
              <div className="content-input-form">
                <p>Agendar vacina para o dia:</p>
                <Field name="dateAppointment">
                  {({form, field}) => {
                    const {setFieldValue} = form
                    const { value } = field
                    return (
                      <DatePicker
                        id="dateAppointment"
                        selected={value}
                        onChange={date => setFieldValue("dateAppointment", date)}
                        onSelect={ date => handleSelectedDate(date)}
                        placeholderText="Selecione o dia"
                        dateFormat="dd/MM/yyyy"
                        minDate={utilFunctions.getDateTomorrow()}
                        />
                    );
                  }}
                </Field>
              </div>
              <ErrorMessage className="message-error" component="span" name="dateAppointment" />
              <div className="content-input-form">
                <p>Qual horário:</p>
                <Field as="select" name="time" className="input-select">
                  <option value="---">---</option>
                  {hours.length > 0 && (
                    hours.map((value, key) => (
                      <option key={key} value={value}>{value}</option>
                    ))
                  )}
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