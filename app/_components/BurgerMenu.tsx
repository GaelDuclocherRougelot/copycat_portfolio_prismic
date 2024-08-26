"use client";

import Image from "next/image";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";

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
        className={`md:hidden flex flex-col w-screen h-screen bg-[#fafaFa] fixed top-0 left-0 transition-opacity duration-500 z-40 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="w-full flex items-center justify-between py-[21px] px-[28px] bg-white">
          <RxCross1
            onClick={() => setIsOpen(!isOpen)}
            color="#6b6764"
            className="cursor-pointer m-[1px]"
          />
          <Image src="/logo.png" width={200} height={100} alt="logo" />
          <CiSearch className="md:hidden" color="#6b6764" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul className="text-2xl text-grayCaption [&>li]:tracking-[0.2rem] [&>li]:py-6 [&>li]:px-[53px] my-6">
            <li>Featured</li>
            <li>Categories</li>
            <li>Information</li>
            <li>Associate</li>
            <li>Prints</li>
            <li>Say Hello</li>
          </ul>
          <ul className="flex gap-8 [&>li]:cursor-pointer px-[53px] py-6">
            <li>
              <AiFillInstagram color="#6b6764" size={24} />
            </li>
            <li>
              <TiSocialFacebook color="#6b6764" size={24} />
            </li>
            <li>
              <FaPinterestP color="#6b6764" size={24} />
            </li>
            <li>
              <TfiYoutube color="#6b6764" size={24} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
