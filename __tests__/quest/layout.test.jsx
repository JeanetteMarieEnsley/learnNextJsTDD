import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("Should display heading", () => {
  it("Should display heading", () => {
    it("Should display heading", () => {
      render(<Layout />);
      const heading = screen.getByRole("heading", {
        name: "Learning Pathways",
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
