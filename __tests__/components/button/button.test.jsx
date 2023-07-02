import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Button from '../../../src/components/button/button'

describe("Button component", () => {
  it("Should be a dynamic button", () => {

    const mockText = 'button text'
    const mockUrl = '/fakeUrl'
    const { getByRole } = render(<Button text={mockText} url={mockUrl} />)
    expect(getByRole('button')).toBeInTheDocument()
  });
});
