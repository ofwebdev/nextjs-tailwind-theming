"use client";
import "./globals.css";
import React, { useState } from "react";
import { useTheme } from "./theme/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Header from "./components/Header";
import SettingsPopup from "./components/SettingPopup";
import GlobalStyles from "./components/GlobalStyle";

export default function Home() {
  const { currentTheme, switchTheme } = useTheme();

  const Card = ({ title }: any) => (
    <div
      className={`p-4 rounded-lg bg-${currentTheme}-primary m-4 border-${currentTheme}-text border-2`}
    >
      <h2
        className={`${
          currentTheme === "dark" ? "text-white" : "text-black"
        } text-lg font-semibold`}
      >
        {title}
      </h2>
      <p
        className={`${
          currentTheme === "dark" ? "text-gray-300" : "text-black"
        }`}
      >
        Lorem ipsum dolor sit amet...
      </p>
    </div>
  );

  return (
    <main className={`min-h-screen bg-${currentTheme}-body`}>
      <GlobalStyles>
        <Header />
      </GlobalStyles>
      <h1 className="text-black text-2xl font-semibold mt-16">
        Theme Switcher
      </h1>

      <ThemeSwitcher />

      <SettingsPopup />

      <div className="flex flex-wrap justify-center">
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        <Card title="Card 4" />
        <Card title="Card 5" />
        <Card title="Card 6" />
      </div>
    </main>
  );
}
