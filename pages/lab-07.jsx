import React, { useState } from "react";
import Todolist from "../components/Todolist";
import { ThemeContext } from "./context/ThemeContext";
import MainLayout from "./layout/MainLayout";

export default function Lab07() {
  const toggleTheme = () => {
    if (selTheme.name === "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };

  const themes = {
    light: {
      name: "light",
      background: "white",
      foreground: "black",
    },
    dark: {
      name: "dark",
      background: "black",
      foreground: "white",
    },
  };
  const [selTheme, setSelTheme] = useState(themes.light);

  const setLightTheme = () => {
    setSelTheme(themes.light);
  };
  const setDarkTheme = () => {
    setSelTheme(themes.dark);
  };
  return (
    <MainLayout>
      <div
        style={{
          backgroundColor: selTheme.background,
          minHeight: "100vh",
        }}
      >
        <ThemeContext.Provider
          value={{ selTheme, toggleTheme, setLightTheme, setDarkTheme }}
        >
          <Todolist />
        </ThemeContext.Provider>
      </div>
    </MainLayout>
  );
}
