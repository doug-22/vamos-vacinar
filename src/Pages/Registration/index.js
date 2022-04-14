import React from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

import "./styles.css";
import Image from "../../Assets/Image2.jpg";

import Header from "../../Components/Header";
import NavigationTabs from "../../Components/NavigationTabs";
import Form from "../../Components/Form";

export default function Registration() {

    const currentLocation = useLocation();

    const handleSubmit = (values) => {
        Axios.post("http://localhost:8080/cadastro", values)
        .then((response) => {
            console.log(response);
        });
    }
    const initialValues = {
        name: "",
        birthDate: "",
        dateAppointment: "",
        time: "",
        vaccinated: false
    };

    return (
        <>
            <Header />
            <NavigationTabs location={currentLocation.pathname} />
            <div className="box-form">
                <img src={Image} alt="Imagem homem adulto sendo vacinado"/>
                <div>
                    <Form handleSubmit={handleSubmit} initialValues={initialValues} />
                </div>
            </div>
        </>
    );
}