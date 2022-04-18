import React, { useState, useEffect } from "react";
import Api from "../../Services/api";
import { useLocation } from "react-router-dom";
import { Formik, Form as FormFormik, Field } from "formik";

import "./styles.css";

import Header from "../../Components/Header";
import NavigationTabs from "../../Components/NavigationTabs";

export default function Management() {

  const currentLocation = useLocation();
  const [listDates, setListDates] = useState([]);
  const [response, setResponse] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const loadApi = async () => {
      let list = await Api.get("/api/agendamento");
      setListDates(list.data.dates);
    }

    loadApi();
  }, []);

  const handleResults = async (dataSelect) => {
    let list = await Api.get(`/api/agendamento?dia=${dataSelect.target.value}`)
    setResponse(list.data.attendanceData);
  }

  const handleSelected = (data) => {
    response.map((value) => {
      if(value.name === data.name){
        setSelected(value)
      }
    });
  }

  const handleVaccination = (id) => {
    console.log(id)
  }

  const initialValues = {
    date: "",
    name: ""
  }

  return (
    <>
      <Header />
      <NavigationTabs location={currentLocation.pathname} />
      <div className="container-filters">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSelected}
        >
          <FormFormik>
          <div className="content-input">
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
          <div className="content-input">
            <label>Selecione a pessoa: </label>
            <Field as="select" name="name" className="input-select">
              <option value="value0">Selecione</option>
              {response &&
                response.map((date, key) => (
                  <option key={key} value={`${date.name}`}>{date.name}</option>
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
              <p style={{marginTop: "20px"}}>Essa pessoa vacinou?<br/>(Clique para cadastrar a vacinação) </p>
            }
          </div>
          {selected &&
            <>
              <div className="content-person">
                <p>{selected.name}</p>
                <p>{selected.birthDate}</p>
                {selected.vaccinated ?
                  <p className="vaccinated">Vacinado</p>
                :
                  <p className="not-vaccinated">Não vacinado</p>
                }
                <button style={{marginTop: "18px"}} className="button" onClick={() => handleVaccination(selected.id)}>Sim</button>
              </div>
              
            </>
          }
        </div>
    </>
  );
}