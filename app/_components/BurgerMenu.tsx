"use client";

import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-[18px] h-[18px] flex flex-col justify-center gap-1 cursor-pointer"
      >
        <span className="h-[1px] w-full bg-white"></span>
        <span className="h-[1px] w-full bg-white"></span>
      </div>

      <div className={`w-screen h-screen bg-white fixed top-0 left-0 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}></div>
    </>
  );
}
