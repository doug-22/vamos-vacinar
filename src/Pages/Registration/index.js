import React from "react";
import { useLocation } from "react-router-dom";

import "./styles.css";
import Image from "../../Assets/Image2.jpg";

import Header from "../../Components/Header";
import NavigationTabs from "../../Components/NavigationTabs";
import Form from "../../Components/Form";

export default function Registration() {

    const actualLocation = useLocation();

    const handleSubmit = (values) => {
        alert(JSON.stringify(values));
        console.log(values)
    }
    const initialValues = {
        name: "",
        birthDate: "",
        dateAppointment: "",
        time: ""
    };

    return (
        <>
            <Header />
            <NavigationTabs location={actualLocation.pathname} />
            <div className="box-form">
                <img src={Image} alt="Imagem homem adulto sendo vacinado"/>
                <div>
                    <Form handleSubmit={handleSubmit} initialValues={initialValues} />
                </div>
            </div>
        </>
    );
}