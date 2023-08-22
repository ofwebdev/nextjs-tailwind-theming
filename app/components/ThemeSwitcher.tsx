import React from "react";
import { useTheme } from "../theme/ThemeContext";

export default function ThemeSwitcher() {
  const { currentTheme, switchTheme } = useTheme();
  return (
    <div className="flex space-x-4">
      <button
        className="px-4 py-2 rounded-lg text-white bg-theme1-primary w-2.5 h-2.5"
        onClick={() => switchTheme("theme1")}
      ></button>
      <button
        className="px-4 py-2 rounded-lg text-white bg-theme2-primary w-2.5 h-2.5"
        onClick={() => switchTheme("theme2")}
      ></button>
      <button
        className="px-4 py-2 rounded-lg text-white bg-theme3-primary w-2.5 h-2.5"
        onClick={() => switchTheme("theme3")}
      ></button>
      <button
        className="px-4 py-2 rounded-lg text-white bg-theme4-primary w-2.5 h-2.5"
        onClick={() => switchTheme("theme4")}
      ></button>
      <button
        className="px-4 py-2 rounded-lg text-white bg-theme5-primary w-2.5 h-2.5"
        onClick={() => switchTheme("theme5")}
      ></button>
      <button
        className="px-4 py-2 rounded-lg text-white bg-theme6-primary w-2.5 h-2.5"
        onClick={() => switchTheme("theme6")}
      ></button>
      <button
        onClick={() => switchTheme("dark")}
        className="px-4 py-2 rounded-lg text-white bg-dark-primary mr-3"
      >
        Dark
      </button>
      <button
        onClick={() => switchTheme("light")}
        className="px-4 py-2 rounded-lg text-black bg-light-primary border-red-800 border-2"
      >
        Light
      </button>
    </div>
  );
}
