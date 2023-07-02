import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Contact from "../../src/app/contact/page";


describe("Contact page", () => {
  it("Should display image", () => {
    render(<Contact />);

    const image = screen.getByRole('img', {name: 'contact image'})

    expect(image).toBeInTheDocument()
  });
  it("Should display heading", () => {
    render(<Contact />);

    const heading = screen.getByRole('heading', {name: `Let's keep in touch`})

    expect(heading).toBeInTheDocument()
  });
});

// describe('Contact page form', () => {
  
// })
