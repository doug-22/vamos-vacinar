import React, { useState } from "react";
import Api from "../../Services/api";
import { Formik, Form as FormFormik, Field } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function ModalManage() {

  const [message, setMessage] = useState();

  const getDateYesterday = () => {
    let currentDate = new Date();
    let tomorrowDate = new Date();
    tomorrowDate.setDate(currentDate.getDate() - 1)
    return tomorrowDate;
  }

  const handleDeleteDate = async (date) => {
    let day = "" + date.dateDelete.getDate();
    let month = "" + (date.dateDelete.getMonth() + 1);
    let year = date.dateDelete.getFullYear();

    if(day.length < 2) day = "0" + day;
    if(month.length < 2) month = "0" + month;

    let dateDelete = [day, month, year].join("-");
    if(window.confirm(`Você tem certeza que deseja apagar os agendamentos do dia ${dateDelete} do banco de dados?`)){
      await Api.delete(`/api/deletar_agendamentos?dia=${dateDelete}`)
        .then(response => {
          setMessage(!response.data.error)
        })
        .catch(error => {
          setMessage(!error.response.data.error)
        })

    }

  }

  const initialValues = {
    dateDelete: ""
  }

  return (
    <div className="container-manage">
      <h1>Deletar agendamentos</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleDeleteDate}
      >
        <FormFormik>
          <div className="content-input-manage">
            <p>Selecione a data:</p>
            <Field name="dateDelete">
              {({form, field}) => {
                const {setFieldValue} = form
                const { value } = field
                return (
                  <DatePicker
                    id="dateDelete"
                    selected={value}
                    onChange={date => setFieldValue("dateDelete", date)}
                    placeholderText="Selecione o dia"
                    dateFormat="dd/MM/yyyy"
                    maxDate={getDateYesterday()}
                    />
                );
              }}
            </Field>
          </div>
          <div className="search-button">
            <button className="button" type="submit">Deletar</button>
          </div>
        </FormFormik>
      </Formik>
      {message &&
        <p className="message-deleted">Os agendamentos selecionados foram deletados do banco de dados!</p>
      }
      {message === false &&
        <p className="message-not-deleted">A data indicada não contém agendamentos!</p>
      }
    </div>
  );
}