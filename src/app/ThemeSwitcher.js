"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "../components/navabar/nav.css"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const setMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

  }

  return (
    <>
      <label class="switch">
        <input type="checkbox" onChange={setMode} checked={theme === "dark"}/>
        <span class="slider round"></span>
      </label>
    </>
  );
};

export default ThemeSwitcher;