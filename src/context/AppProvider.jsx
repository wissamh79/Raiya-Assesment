import React, { useState, useReducer, useEffect } from "react";
import { AppContext } from ".";

import { reducer, actions, initialState } from "./state";
const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

const AppProvider = ({ initialTheme, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("color-theme", theme);
  };
  if (initialTheme) {
    rawSetTheme(initialTheme);
  }
  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,

        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
