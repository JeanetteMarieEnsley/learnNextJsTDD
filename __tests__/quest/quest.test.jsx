import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Quest from "../../src/app/quest/page";

describe("Quest page", () => {
  it("Should display heading", () => {
    render(<Quest />);
    const heading = screen.getByRole("heading", { name: "Choose your Quest" });
    expect(heading).toBeInTheDocument();
  });
  it("Should display frontend path link", () => {
    render(<Quest />);
    const frontend = screen.getByRole("link", { name: "Frontend Quest" });
    expect(frontend).toBeInTheDocument();
    expect(frontend).toHaveAttribute("href", "/quest/frontend");
  });
  it("Should display backend path link", () => {
    render(<Quest />);
    const backend = screen.getByRole("link", { name: "Backend Quest" });
    expect(backend).toBeInTheDocument();
    expect(backend).toHaveAttribute("href", "/quest/backend");
  });
  it("Should display testing path link", () => {
    render(<Quest />);
    const testing = screen.getByRole("link", { name: "Testing Quest" });
    expect(testing).toBeInTheDocument();
    expect(testing).toHaveAttribute("href", "/quest/testing");
  });
  it("Should display Cloud path link", () => {
    render(<Quest />);
    const cloud = screen.getByRole("link", { name: "Cloud Quest" });
    expect(cloud).toBeInTheDocument();
    expect(cloud).toHaveAttribute("href", "/quest/cloud");
  });
  it("Should display AI path link", () => {
    render(<Quest />);
    const AI = screen.getByRole("link", { name: "Gen AI Quest" });
    expect(AI).toBeInTheDocument();
    expect(AI).toHaveAttribute("href", "/quest/AI");
  });
});
