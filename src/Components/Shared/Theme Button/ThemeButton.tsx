"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (resolvedTheme === "dark") {
    return <FiSun className="text-2xl" onClick={() => setTheme("light")} />;
  }
  if (resolvedTheme === "light") {
    return <FiMoon className="text-2xl" onClick={() => setTheme("dark")} />;
  }
};

export default ThemeButton;
