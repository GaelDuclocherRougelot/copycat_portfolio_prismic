"use client";

import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden w-[18px] h-[18px] flex flex-col justify-center cursor-pointer z-50 gap-1 ${isOpen ? "opacity-0" : "opacity-100"}`}
      >
        <span className={`h-[1px] w-full bg-white`}></span>
        <span className={`h-[1px] w-full bg-white`}></span>
      </div>

      <div
        className={`md:hidden block w-screen h-screen bg-white fixed top-0 left-0 transition-opacity duration-500 z-40 ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        <div className="w-full flex items-center justify-between py-[21px] px-[28px]">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-[18px] h-[18px] flex flex-col justify-center cursor-pointer gap-1`}
          >
            <span className={`h-[1px] w-full bg-[#6b6764]`}></span>
            <span className={`h-[1px] w-full bg-[#6b6764]`}></span>
          </div>
          <Image src="/logo.png" width={200} height={100} alt="logo" />
          <CiSearch className="md:hidden" color="#6b6764" />
        </div>
      </div>
    </>
  );
}
