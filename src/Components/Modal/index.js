import React from "react";


import "./styles.css";
import ModalVaccination from "./ModalVaccination";
import ModalManage from "./ModalManage";

export default function Modal ({id = "modal", onClose = () => {}, listDates, typeModal}) {

  const handleOutsideClick = (e) => {
      if(e.target.id === id) onClose()
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container-modal">
        <button className="modal-close" onClick={onClose}/>

        {typeModal === 1 ?
          <ModalVaccination listDates={listDates} />
        :
          <ModalManage />
        }

      </div>
    </div>
  )
}