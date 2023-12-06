"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "../components/navabar/nav.css"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {

    setMounted(true)

  }, []);


setTimeout(() => {
  
  if (!mounted) {
    return null;
  }
}, 10);


  const setMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

  }


  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={setMode} checked={theme === "dark"} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ThemeSwitcher;