import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Blog from "../../src/app/blog/page";

describe("Blog page", () => {
  it("Should display link to blog post", () => {
    // render(<Blog />);
    // const link = screen.getByTestId("blog_link");
    // expect(link).toBeInTheDocument();
    // expect(link).toHaveAttribute("href", "/blog/testid");
  });
});
