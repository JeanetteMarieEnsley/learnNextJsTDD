import {vi} from 'vitest'
import Navbar from "../../../src/components/navbar/navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { SessionProvider } from "next-auth/react";
import {useSession} from "next-auth/react";

vi.mock("./next-auth/react", () => {
  render(
    <AuthProvider>{children}</AuthProvider>
  
  );
  const mockSession = {
      user: {
          name: 'test',
          email: 'test@gmail.com',
          image: 'image'
      },
  
}
  return {
    useSession: vi.fn(() => {
      return {data: mockSession, status: 'authenticated'
    }  
    }),
    
  };
  
});


describe("navbar", () => {
  it("should have home link and display text", () => {
    render(
      <SessionProvider>
      <Navbar />
    </SessionProvider>
    );
    const home = screen.queryByRole("link", { name: "Home" });

    expect(home).toBeInTheDocument();
    expect(home).toHaveAttribute("href", "/");
  });
  it("should have quest link and display text", () => {
    render(
      <SessionProvider>
      <Navbar />
    </SessionProvider>
      );
    const quest = screen.queryByRole("link", { name: "Quest" });

    expect(quest).toBeInTheDocument();
    expect(quest).toHaveAttribute("href", "/quest");
  });
  it("should have blog link and display text", () => {
    render(
      <SessionProvider>
      <Navbar />
    </SessionProvider>
      );

    const blog = screen.queryByRole("link", { name: "Blog" });

    expect(blog).toBeInTheDocument();
    expect(blog).toHaveAttribute("href", "/blog");
  });
  it("should have about link and display text", () => {
    render(
      <SessionProvider>
      <Navbar />
    </SessionProvider>
      );
    const about = screen.queryByRole("link", { name: "About" });

    expect(about).toBeInTheDocument();
    expect(about).toHaveAttribute("href", "/about");
  });
  it("should have contact link and display text", () => {
    render(
      <SessionProvider>
      <Navbar />
    </SessionProvider>
      );
    const contact = screen.queryByRole("link", { name: "Contact" });

    expect(contact).toBeInTheDocument();
    expect(contact).toHaveAttribute("href", "/contact");
  });
  it("should have dashboard link and display text", () => {
    render(
      <SessionProvider>
      <Navbar />
    </SessionProvider>
      );
    const dashboard = screen.queryByRole("link", { name: "Dashboard" });

    expect(dashboard).toBeInTheDocument();
    expect(dashboard).toHaveAttribute("href", "/dashboard");
  });
  it("should have a logo that takes you to the home page", () => {
    render(
      <SessionProvider>
      <Navbar />
    </SessionProvider>
      );
    const logo = screen.queryByRole("link", { name: "Enchanted Docs" });
    expect(logo).toBeInTheDocument();
  });
  
});
