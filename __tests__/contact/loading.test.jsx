import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Loading from "../../src/app/contact/loading";

describe("Loading", () => {
  it("Should render", () => {
    render(<Loading />);
  });
});
