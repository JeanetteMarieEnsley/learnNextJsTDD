"use client";

import { createContext, useState } from "react";

type Mode = "light" | "dark";
type ToggleContext = { 
  mode: Mode; 
  toggleMode: () => void 
};

export const ThemeContext = createContext<ToggleContext>(
  {} as ToggleContext
);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState<Mode>("dark");

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
