import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import App from "../../App";

describe("Testing App", () => {
  it("should be able to show the h1 element", () => {
    render(
      <App />
    );
    const h1Element = screen.getByText("Bem Vindo!");

    expect(h1Element).toBeInTheDocument;
  });

  it("should be able to redirect to registration page", async () => {
    render(
      <App />
    );

    const registerBtn = screen.getByTestId("btn-to-registration")

    fireEvent.click(registerBtn);

    const textName = screen.getByText("Seu nome:");
    const textBirthDate = screen.getByText("Data de nascimento:");
    const textDateAppointment = screen.getByText("Agendar vacina para o dia:");
    const textTime = screen.getByText("Qual horário:");
    
    expect(textName).toBeInTheDocument;
    expect(textBirthDate).toBeInTheDocument;
    expect(textDateAppointment).toBeInTheDocument;
    expect(textTime).toBeInTheDocument;
  });

  it("should be able to redirect to registration page via navigation tab component", () => {
    const {container} = render(
      <App />
    );

    const registerBtn = container.getElementsByClassName("navigation-tabs")[0].getElementsByTagName("a")[0];

    fireEvent.click(registerBtn);

    const textName = screen.getByText("Seu nome:");
    const textBirthDate = screen.getByText("Data de nascimento:");
    const textDateAppointment = screen.getByText("Agendar vacina para o dia:");
    const textTime = screen.getByText("Qual horário:");
    
    expect(textName).toBeInTheDocument;
    expect(textBirthDate).toBeInTheDocument;
    expect(textDateAppointment).toBeInTheDocument;
    expect(textTime).toBeInTheDocument;
  });

  it("should be able to redirect to appointments page via navigation tab component", () => {
    const {container} = render(
      <App />
    );

    const appontmentsBtn = container.getElementsByClassName("navigation-tabs")[0].getElementsByTagName("a")[1];

    fireEvent.click(appontmentsBtn);

    const text = screen.getByText("Selecione a data:");

    expect(text).toBeInTheDocument;
  });
});