import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Home from "../src/app/page";

describe("Home page", () => {
  it("Should display home page image", () => {
    render(<Home />);

    const image = screen.queryByRole("img", { name: "enchanted book" });
    expect(image).toBeInTheDocument();
  });

  it("Should contain heading for the home page", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: "Hello Adventurer" });
    expect(heading).toBeInTheDocument();
  });
  it("Should contain paragraph description for the home page", () => {
    render(<Home />);
    const paragraphMessage = `Are you ready to embark on your quest for Knowledge? Pick a path to follow and make sure to add your findings. Together we can level up our programming skills and rise up the ranks.`;
    const paragraphText = screen.getByText((text) =>
      text.startsWith("Are you ready")
    );
    expect(paragraphText.textContent).toBe(paragraphMessage);
  });
  it("Should display button on home page with a link", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: "Pick your Quest" });
    const link = screen.getByRole("link", { name: "Pick your Quest" });
    expect(button).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/portfolio')
  });
});
