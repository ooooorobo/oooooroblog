"use client";
import { useContext } from "react";
import { DarkModeContext } from "@src/utils/context/DarkModeContext";

export const ThemeToggleButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <i className="bi bi-moon-fill" />
      ) : (
        <i className="bi bi-sun-fill" />
      )}
    </button>
  );
};
