"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  sunset: "sunset",
  winter: "winter",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);

  const toggleTheme = () => {
    const newTheme = theme === themes.sunset ? themes.winter : themes.sunset;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-outline btn-sm">
      {theme === "sunset" ? (
        <BsSunFill className="h-4 w-4" />
      ) : (
        <BsMoonFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
