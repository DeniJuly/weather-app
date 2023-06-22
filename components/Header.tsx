import Image from "next/image";
import React from "react";

import ButtonTheme from "./ButtonTheme";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="mx-auto max-w-[1440px] sm:px-16 px-6 flex justify-between items-center py-10">
        <Image
          src="/logo.webp"
          width={35}
          height={35}
          alt="Deni Juli Setiawan"
        />
        <h1 className="font-extrabold text-black-70 dark:text-white text-xl">
          Jakarta
        </h1>
        <ButtonTheme />
      </nav>
    </header>
  );
};

export default Header;
