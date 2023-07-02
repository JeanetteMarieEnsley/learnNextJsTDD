import Footer from "../../../src/components/footer/footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("footer copy rights", () => {
  it("example copy rights", () => {
    render(<Footer />);
    const footer = screen.getByText(
      "@2023 Enchanted Docs. All rights reserved"
    );
    expect(footer).toBeInTheDocument();
  });
  it("should display facebook image", () => {
    render(<Footer />);
    const expectedSrc = expect.stringMatching("%2Ffacebook.png");
    const facebook = screen.queryByRole("img", { name: "facebook" });
    expect(facebook).toBeInTheDocument();
    expect(facebook).toHaveAttribute("src", expectedSrc);
    expect(facebook).toHaveAttribute("alt", "facebook");
  });
  it("should display instagram image", () => {
    render(<Footer />);
    const expectedSrc = expect.stringMatching("%2Finstagram.png");
    const instagram = screen.queryByRole("img", { name: "instagram" });
    expect(instagram).toBeInTheDocument();
    expect(instagram).toHaveAttribute("src", expectedSrc);
    expect(instagram).toHaveAttribute("alt", "instagram");
  });
  it("should display twitter image", () => {
    render(<Footer />);
    const expectedSrc = expect.stringMatching("%2Ftwitter.png");
    const twitter = screen.queryByRole("img", { name: "twitter" });
    expect(twitter).toBeInTheDocument();
    expect(twitter).toHaveAttribute("src", expectedSrc);
    expect(twitter).toHaveAttribute("alt", "twitter");
  });
  it("should display youtube image", () => {
    render(<Footer />);
    const expectedSrc = expect.stringMatching("%2Fyoutube.png");
    const youtube = screen.queryByRole("img", { name: "youtube" });
    expect(youtube).toBeInTheDocument();
    expect(youtube).toHaveAttribute("src", expectedSrc);
    expect(youtube).toHaveAttribute("alt", "youtube");
  });
});
