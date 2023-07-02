import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Contact from "../../src/app/contact/page";

describe("Contact page", () => {
  it("Should display image", () => {
    render(<Contact />);

    const image = screen.getByRole("img", { name: "contact image" });

    expect(image).toBeInTheDocument();
  });
  it("Should display heading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", {
      name: `Let's keep in touch`,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("Contact page form", () => {
  it("Should have name input field", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("Name");
    expect(name).toBeInTheDocument();
  });
  it("Should have email input field", () => {
    render(<Contact />);
    const email = screen.getByPlaceholderText("Email");
    expect(email).toBeInTheDocument();
  });
  it("Should have text area", () => {
    render(<Contact />);
    const textarea = screen.getByPlaceholderText(`So what's the sitch?`);
    expect(textarea).toBeInTheDocument();
  });
  it("Should display send button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: "Send" });
    const link = screen.getByRole("link", { name: "Send" });
    expect(button).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
  });
});
