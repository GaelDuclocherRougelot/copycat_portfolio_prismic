"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import BurgerMenu from "./BurgerMenu";
import Dropdown from "./Dropdown";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseOver = (dropdownId: string) => {
    setOpenDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="absolute z-50 top-0 left-0 w-full flex items-center justify-between md:justify-center py-[21px] px-[28px] md:py-[3.5vw] md:px-[60px]">
      <nav className="hidden text-center md:flex md:gap-10 lg:gap-[5vw] justify-between tracking-[0.3rem] text-white [&>a]:text-[1vw]">
        <Link href="">
          Featured <br />
          <span className="text-[0.75vw] italic tracking-wider">
            published work
          </span>
        </Link>
        <div
          onMouseOver={() => handleMouseOver("categories")}
          onMouseLeave={handleMouseLeave}
          className="relative pb-3"
        >
          <Link href="">
            Categories <br />
            <span className="text-[0.75vw] italic tracking-wider">
              from the blog
            </span>
          </Link>
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

        <div
          onMouseOver={() => handleMouseOver("informations")}
          onMouseLeave={handleMouseLeave}
          className="relative pb-3"
        >
          <Link href="">
            Informations <br />
            <span className="text-[0.75vw] italic tracking-wider">
              find out more
            </span>
          </Link>
          {openDropdown === "informations" && (
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
        <div
          onMouseOver={() => handleMouseOver("associate")}
          onMouseLeave={handleMouseLeave}
          className="relative pb-3"
        >
          <Link href="">
            Associate <br />
            <span className="text-[0.75vw] italic tracking-wider">
              Anje&apos; Portfolio
            </span>
          </Link>
          {openDropdown === "associate" && (
            <Dropdown links={["About Anje", "Portfolio", "Contact Anje"]} />
          )}
        </div>
        <div
          onMouseOver={() => handleMouseOver("prints")}
          onMouseLeave={handleMouseLeave}
          className="relative pb-3"
        >
          <Link href="">
            Prints <br />
            <span className="text-[0.75vw] italic tracking-wider">
              tangible goods
            </span>
          </Link>
          {openDropdown === "prints" && <Dropdown links={["Art", "Clients"]} />}
        </div>
        <Link href="">
          Say Hello <br />
          <span className="text-[0.75vw] italic tracking-wider">
            get in touch
          </span>
        </Link>
      </nav>

      {/* Mobile */}
      <BurgerMenu />
      <Image
        src="/logo.png"
        width={200}
        height={100}
        alt="logo"
        className="md:hidden filter invert opacity-80"
      />
      <CiSearch className="md:hidden" color="white" />
    </header>
  );
}
