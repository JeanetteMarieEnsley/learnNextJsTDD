import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import About from "../../src/app/about/page";

describe("about page", () => {
  it("Should display banner image", () => {
    //Arrange
    render(<About />);

    //Act
    const image = screen.getByRole("img", { name: "education about banner" });

    //Assert
    expect(image).toBeInTheDocument();
  });
  it("Should display content under About Us section", () => {
    //Arrange
    render(<About />);

    //Act
    const content = screen.getByRole("heading", { name: "About Us" });

    //Assert
    expect(content).toBeInTheDocument();
  });
  it("Should display content under Goals to achieve section", () => {
    //Arrange
    render(<About />);

    //Act
    const content = screen.getByRole("heading", { name: "Goals to Achieve" });

    //Assert
    expect(content).toBeInTheDocument();
  });
  
});
