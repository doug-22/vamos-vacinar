import React, { useState } from "react";
import Api from "../../Services/api";
import { Formik, Form as FormFormik, Field } from "formik";

export default function ModalVaccination({listDates}) {

  const [selected, setSelected] = useState();
  const [response, setResponse] = useState([]);

  const handleResults = async (dataSelect) => {
    let list = await Api.getListAppointments(dataSelect.target.value);
    setResponse(list.attendanceData);
  }

  const handleSelected = (data) => {
    // eslint-disable-next-line
    response.map((value) => {
      if(value.id === data.identifier){
        setSelected(value)
      }
    });
  }

  const handleVaccination = async (id) => {
    let response = await Api.editVaccination(id);
    setSelected(response);
  }

  const initialValues = {
    date: "",
    name: ""
  }

  return (
    <div className="container-vaccination">
      <h1>Cadastrar vacinação</h1>
      <div className="container-filters">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSelected}
        >
          <FormFormik>
            <div className="content-input-vaccination">
              <label>Selecione a data: </label>
              <Field as="select" name="date" className="input-select" onClick={handleResults}>
                <option value="---">Selecione</option>
                {listDates.length !== 0 &&
                  listDates.map((date, key) => (
                    <option key={key} value={`${date}`}>{date}</option>
                  ))
                }
              </Field>
            </div>
            <div className="content-input-vaccination">
              <label>Selecione a pessoa: </label>
              <Field as="select" name="identifier" className="input-select">
                <option value="value0">Selecione</option>
                {response &&
                  response.map((date, key) => (
                    <option key={key} value={`${date.id}`}>{date.name}</option>
                  ))
                }
              </Field>
            </div>

            <div className="search-button">
              <button className="button" type="submit">Buscar</button>
            </div>
          </FormFormik>
        </Formik>
      </div>

      <div className="content-result-search">
        <div className="content-titles">
          <p>Nome: </p>
          <p>Data de Nascimento: </p>
          <p>Situação: </p>
          {selected && 
            <p style={{marginTop: "20px"}}>Essa pessoa vacinou?</p>
          }
        </div>
        {selected &&
          <>
            <div className="content-person">
              <p>{selected.name}</p>
              <p>{selected.birthDate}</p>
              {selected.vaccinated ?
                <>
                  <p className="vaccinated-modal">Vacinado</p>
                  <button style={{marginTop: "5px"}} className="button button-disabled" onClick={() => handleVaccination(selected.id)} disabled={true}>Sim</button>
                </>
                :
                <>
                <p className="not-vaccinated-modal">Não vacinado</p>
                <button style={{marginTop: "5px"}} className="button" onClick={() => handleVaccination(selected.id)}>Sim</button>
                </>
              }
            </div>
          </>
        }
      </div>
    </div>
  );
}