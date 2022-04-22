import React, { useState, useEffect } from "react";
import Api from "../../Services/api";
import { useLocation } from "react-router-dom";

import "./styles.css";
import Image1 from "../../Assets/seringa.jpg";
import Image2 from "../../Assets/prancheta.jpg";

import Header from "../../Components/Header";
import NavigationTabs from "../../Components/NavigationTabs";
import Modal from "../../Components/Modal";

export default function Management() {

  const currentLocation = useLocation();
  const [listDates, setListDates] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [typeModal, setTypeModal] = useState();

  useEffect(() => {
    const loadApi = async () => {
      let list = await Api.get("/api/agendamento");
      setListDates(list.data.dates);
    }

    loadApi();
  }, []);

  const handleTypeModal = (typeModal) => {
    setTypeModal(typeModal);
    setModalVisible(true);
  }

  return (
    <>
      <Header />
      <NavigationTabs location={currentLocation.pathname} />
      <div className="container-buttons">
        <div data-testid="btn-modal-vaccination" className="content-button" onClick={() => handleTypeModal(1)}>
          <img src={Image1} alt="Imagem de botão para página de gerenciar vacinação" />
          <p>Gerenciar vacinação</p>
        </div>
        <div data-testid="btn-modal-management" className="content-button" onClick={() => handleTypeModal(2)}>
          <img src={Image2} alt="Imagem de botão para página de gerenciar agendamentos" />
          <p>Gerenciar agendamentos</p>
        </div>
        {modalVisible ? <Modal typeModal={typeModal} listDates={listDates} onClose={() => setModalVisible(false)}/> : null}
      </div>

    </>
  );
}