import React, { useEffect, useState } from "react";
import { Formik, Form as FormFormik, Field } from "formik";
import Api from "../../Services/api";
import { documentTitle } from "../../Components/documentTitle";

import "./styles.css";
import Image from "../../Assets/Image3.jpg";

export default function Appointments() {

  documentTitle(" | Agendamentos")

  const [listDates, setListDates] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const loadApi = async () => {
      let list = await Api.get("/api/agendamento");
      setListDates(list.data.dates);
    }

    loadApi();
  }, [])

  const handleResults = async (dataSelect) => {
    let list = await Api.get(`/api/agendamento?dia=${dataSelect.date}`)
    setResponse(list.data.attendanceData);
  }

  const initialValues = {
    date: ""
  }

  return (
      <>
        <div className="box-appointments">
          <div className="search">
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={handleResults}
              >
                <FormFormik>
                <label>Selecione a data: </label>
                <Field as="select" name="date" className="input-select">
                  <option value="value0">Selecione</option>
                  {listDates.length !== 0 &&
                    listDates.map((date, key) => (
                      <option key={key} value={`${date}`}>{date}</option>
                    ))
                  }
                </Field>
                <div className="search-button">
                  <button className="button" type="submit">Listar agendamentos</button>
                </div>
                </FormFormik>
              </Formik>
            </div>
            <img src={Image} alt="Imagem de um homem sendo vacinado" />
          </div>
          <div className="search-results">
            {response &&
              response.map((attendance, key) => (
                <div key={key} className="results">
                  <p>{attendance.time}</p>
                  <p style={{width: "250px"}}>{attendance.name}</p>
                  {attendance.vaccinated ?
                    <p className="vaccinated">Vacinou!</p>
                  :
                    <p className="not-vaccinated">Não vacinou!</p>
                  }
                  
                </div>
              ))
            }
          </div>
        </div>
      </>
  );
}