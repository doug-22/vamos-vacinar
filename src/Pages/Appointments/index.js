import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../../Components/Header";
import NavigationTabs from "../../Components/NavigationTabs";

import "./styles.css";
import Image from "../../Assets/Image3.jpg";

export default function Appointments() {

  const currentLocation = useLocation();

  return (
      <>
        <Header />
        <NavigationTabs location={currentLocation.pathname}/>
        <div className="box-appointments">
          <div className="search">
            <div>
              <label>Selecione a data: </label>
              <input/>
            </div>
            <img src={Image} alt="Imagem de um homem sendo vacinado" />
          </div>
          <div className="search-results">
            <div className="results">
              <p>07:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>08:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>09:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>10:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>11:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>13:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>14:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>15:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>16:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
            <div className="results">
              <p>17:00 hrs</p>
              <div>
                <p>Douglas Aguiar Oliveira</p>
                <p>Douglas Aguiar Oliveira</p>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}