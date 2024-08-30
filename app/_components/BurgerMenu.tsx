"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";
import Dropdown from "./Dropdown";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseClick = (dropdownId: string | null) => {
    if (dropdownId === openDropdown) {
      setOpenDropdown(null);
    }
    setOpenDropdown(dropdownId);
  };

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
        <div className="flex flex-col justify-between h-full overflow-hidden">
          <nav className="text-2xl flex flex-col text-grayCaption [&>li]:tracking-[0.2rem] [&>div]:py-6 [&>a]:py-6 [&>a]:px-[53px] [&>div]:px-[53px] my-6 overflow-y-scroll">
            <Link href={""}>Featured</Link>
            <div className={openDropdown === "categories" ? "bg-white" : ""}>
              <div className="flex justify-between items-center">
                <Link href={""}>Categories</Link>
                <RxCross1
                  onClick={() => {
                    openDropdown != "categories"
                      ? handleMouseClick("categories")
                      : handleMouseClick(null);
                  }}
                  size={16}
                  className={`transition-transform duration-500 ${openDropdown === "categories" ? "" : "rotate-45"}`}
                />
              </div>

              {openDropdown === "categories" && (
                <Dropdown
                  links={[
                    "Featured",
                    "Weddings",
                    "Elopements",
                    "Personal",
                    "Slideshows",
                  ]}
                />
              )}
            </div>

            <div className={openDropdown === "information" ? "bg-white" : ""}>
              <div className="flex justify-between items-center">
                <Link href={""}>Information</Link>
                <RxCross1
                  onClick={() => {
                    openDropdown != "information"
                      ? handleMouseClick("information")
                      : handleMouseClick(null);
                  }}
                  size={16}
                  className={`transition-transform duration-500 ${openDropdown === "information" ? "" : "rotate-45"}`}
                />
              </div>

              {openDropdown === "information" && (
                <Dropdown
                  links={[
                    "About",
                    "Approach",
                    "FAQ",
                    "Pricing",
                    "For Photographers",
                  ]}
                />
              )}
            </div>

            <div className={openDropdown === "associate" ? "bg-white" : ""}>
              <div className="flex justify-between items-center">
                <Link href={""}>Associate</Link>
                <RxCross1
                  onClick={() => {
                    openDropdown != "associate"
                      ? handleMouseClick("associate")
                      : handleMouseClick(null);
                  }}
                  size={16}
                  className={`transition-transform duration-500 ${openDropdown === "associate" ? "" : "rotate-45"}`}
                />
              </div>

              {openDropdown === "associate" && (
                <Dropdown links={["About Anje", "Portfolio", "Contact Anje"]} />
              )}
            </div>

            <div className={openDropdown === "prints" ? "bg-white" : ""}>
              <div className="flex justify-between items-center">
                <Link href={""}>Prints</Link>
                <RxCross1
                  onClick={() => {
                    openDropdown != "prints"
                      ? handleMouseClick("prints")
                      : handleMouseClick(null);
                  }}
                  size={16}
                  className={`transition-transform duration-500 ${openDropdown === "prints" ? "" : "rotate-45"}`}
                />
              </div>

              {openDropdown === "prints" && (
                <Dropdown links={["Art", "Clients"]} />
              )}
            </div>

            <Link href={""}>Say Hello</Link>
          </nav>
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
