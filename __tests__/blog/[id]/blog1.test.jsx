import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BlogPost from "../../../src/app/blog/[id]/page";

describe("Blog post one", () => {
  it("Should render", () => {
    render(<BlogPost />);
  });
});
