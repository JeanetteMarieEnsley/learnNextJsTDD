import Navbar from "../../../src/components/navbar/navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("navbar", () => {
  it("should have home link and display text", () => {
    render(<Navbar />);
    const home = screen.queryByRole("link", { name: "Home" });

    expect(home).toBeInTheDocument();
    expect(home).toHaveAttribute("href", "/");
  });
  it("should have portfolio link and display text", () => {
    render(<Navbar />);
    const portfolio = screen.queryByRole("link", { name: "Portfolio" });

    expect(portfolio).toBeInTheDocument();
    expect(portfolio).toHaveAttribute("href", "/portfolio");
  });
  it("should have blog link and display text", () => {
    render(<Navbar />);

    const blog = screen.queryByRole("link", { name: "Blog" });

    expect(blog).toBeInTheDocument();
    expect(blog).toHaveAttribute("href", "/blog");
  });
  it("should have about link and display text", () => {
    render(<Navbar />);
    const about = screen.queryByRole("link", { name: "About" });

    expect(about).toBeInTheDocument();
    expect(about).toHaveAttribute("href", "/about");
  });
  it("should have contact link and display text", () => {
    render(<Navbar />);
    const contact = screen.queryByRole("link", { name: "Contact" });

    expect(contact).toBeInTheDocument();
    expect(contact).toHaveAttribute("href", "/contact");
  });
  it("should have a logo that takes you to the home page", () => {
    render(<Navbar />);
    const logo = screen.queryByRole("link", { name: "Enchanted Docs" });
    expect(logo).toBeInTheDocument();
  });
  it("should have a button to logout", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: "Logout" });
    expect(button).toBeInTheDocument();
  });
});
