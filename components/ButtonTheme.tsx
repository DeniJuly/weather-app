"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

function ButtonTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => {
        setTheme(currentTheme === "light" ? "dark" : "light");
      }}
      className="w-9 h-9 rounded-full bg-slate-100 dark:bg-black-70 flex justify-center items-center"
    >
      <Image src="/light.svg" width={23} height={23} alt="icon dark" className="dark:block hidden" />
      <Image src="/dark.svg" width={23} height={23} alt="icon dark" className="dark:hidden block" />
    </button>
  );
}

export default ButtonTheme;
