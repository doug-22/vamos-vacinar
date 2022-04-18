import React, { useState } from "react";
import Api from "../../Services/api";
import { Formik, ErrorMessage, Form as FormFormik, Field } from "formik";

import schema from "./schema";
import DatePicker from "react-datepicker";

import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import TitleForm from "../../Assets/Title-form.svg";


export default function Form({handleSubmit, initialValues}) {

  const [hours, setHours] = useState([]);

  const handleSelectedDate = async (dateSelect) => {
    let day = "" + dateSelect.getDate();
    let month = "" + (dateSelect.getMonth() + 1);
    let year = dateSelect.getFullYear();

    if(day.length < 2) day = "0" + day;
    if(month.length < 2) month = "0" + month;

    let date = [day, month, year].join("-");
    let list = await Api.get(`/api/agendamento?dia=${date}`);
    setHours(filterHours(list.data.attendanceTimes));
  }


  const filterHours = (list) => {
    let listFilter = ["07:00", "08:00", "09:00", "10:00","11:00","12:00","14:00","15:00","16:00","17:00"];
    if(!(list === undefined)){
      list.map((hour) => {
        if(listFilter.includes(hour)){
          let count = list.filter(x => x === hour).length;
          if(count === 2){
            let index = listFilter.indexOf(hour);
            listFilter.splice(index, 1);
          }
        }
      });
    }
    return listFilter;
  }

  const getDateTomorrow = () => {
    let currentDate = new Date();
    let tomorrowDate = new Date();
    tomorrowDate.setDate(currentDate.getDate() + 1)
    return tomorrowDate;
  }
  
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
              <div className="content-input">
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
                        minDate={getDateTomorrow()}
                        />
                    );
                  }}
                </Field>
              </div>
              <ErrorMessage className="message-error" component="span" name="dateAppointment" />
              <div className="content-input">
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