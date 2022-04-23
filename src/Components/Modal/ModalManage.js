import React, { useState } from "react";
import Api from "../../Services/api";
import { Formik, Form as FormFormik, Field } from "formik";
import DatePicker from "react-datepicker";
import utilFunctions from "../../Utils/util.functions";

import "react-datepicker/dist/react-datepicker.css";

export default function ModalManage() {

  const [message, setMessage] = useState();

  const handleDeleteDate = async (date) => {
    let dateDelete = utilFunctions.formatDate(date.dateDelete);
    if(window.confirm(`Você tem certeza que deseja apagar os agendamentos do dia ${dateDelete} do banco de dados?`)){
      let response = await Api.deleteAppointments(dateDelete);
      setMessage(response);
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
                    maxDate={utilFunctions.getDateYesterday()}
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