import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router} from "react-router-dom";

import Home from "../../Pages/Home";
import Registration from "../../Pages/Registration";

describe("Testing home page", () => {
  it("should be able to show the h1 element", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const h1Element = screen.getByText("Bem Vindo!");

    expect(h1Element).toBeInTheDocument;
  });

  it("should be able to redirect to registration page", async () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const btnNode = await waitFor(
      () => screen.getByTestId("btn-to-registration")
    );

    fireEvent.click(btnNode);
    
    expect(
      render(
        <Router>
          <Registration />
        </Router>
      )
    )
  });
});