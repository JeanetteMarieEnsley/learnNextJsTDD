import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Contact from "../../src/app/contact/page";

describe("Contact page", () => {
  it("Should render", () => {
    render(<Contact />);
  });
});
