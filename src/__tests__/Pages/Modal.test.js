import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter  } from "react-router-dom";

import Management from "../../Pages/Management";

describe("Testing modal", () => {
  it("should be able to open the modal vaccination", () => {
    render(
      <MemoryRouter>
        <Management />
      </MemoryRouter>
    );

    const vaccinationBtn = screen.getByTestId("btn-modal-vaccination");

    fireEvent.click(vaccinationBtn);

    const textDate = screen.getByText("Selecione a data:");
    const textName = screen.getByText("Selecione a pessoa:");
    
    expect(textDate).toBeInTheDocument;
    expect(textName).toBeInTheDocument;
  });

  it("should be able to open the modal management", () => {
    render(
      <MemoryRouter>
        <Management />
      </MemoryRouter>
    );

    const managementBtn = screen.getByTestId("btn-modal-management");

    fireEvent.click(managementBtn);

    const textDate = screen.getByText("Selecione a data:");
    const textDelete = screen.getByText("Deletar");
    
    expect(textDate).toBeInTheDocument;
    expect(textDelete).toBeInTheDocument;
  });
});