import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Portfolio from "../../src/app/portfolio/page";

describe("Portfolio", () => {
  it("Should render", () => {
    render(<Portfolio />);
  });
});
