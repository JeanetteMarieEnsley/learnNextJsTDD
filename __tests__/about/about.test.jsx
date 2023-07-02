import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import About from "../../src/app/about/page";

describe("about page", () => {
  it("Should render", () => {
    render(<About />);
  });
});
