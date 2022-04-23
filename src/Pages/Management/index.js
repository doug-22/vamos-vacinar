import React, { useState, useEffect } from "react";
import Api from "../../Services/api";
import { documentTitle } from "../../Utils/documentTitle";

import "./styles.css";
import Image1 from "../../Assets/seringa.jpg";
import Image2 from "../../Assets/prancheta.jpg";

import Modal from "../../Components/Modal";

export default function Management() {

  documentTitle(" | Gerenciar")

  const [listDates, setListDates] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [typeModal, setTypeModal] = useState();

  useEffect(() => {
    const loadApi = async () => {
      let list = await Api.getListAppointments();
      setListDates(list)
    }

    loadApi();
  }, []);

  const handleTypeModal = (typeModal) => {
    setTypeModal(typeModal);
    setModalVisible(true);
  }

  return (
    <>
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