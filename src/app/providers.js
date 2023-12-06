"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {    
    setMounted(false);
  }, []);



setTimeout(() => {
  
  if (!mounted) {
    return <>{children}</>;
  }
}, 10);
  
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
}