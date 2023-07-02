import Footer from "../../../components/footer/footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("footer", () => {
  it("example copy rights", () => {
    render(<Footer />);
    const footer = screen.getByText(
      "@2023 learn and grow. All rights reserved"
    );
    expect(footer).toBeInTheDocument();
  });
});
