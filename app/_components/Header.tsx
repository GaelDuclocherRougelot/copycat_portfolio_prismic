import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className="absolute z-50 top-0 left-0 w-full flex items-center justify-between md:justify-center py-[21px] px-[28px] md:py-[3.5vw] md:px-[60px]">
      <ul className="hidden text-center md:flex md:gap-10 lg:gap-[5vw] justify-between tracking-[0.3rem] text-white [&>a]:text-[1vw]">
        <Link href="">
          Featured <br />
          <span className="text-[0.75vw] italic tracking-wider">
            published work
          </span>
        </Link>
        <Link href="">
          Categories <br />
          <span className="text-[0.75vw] italic tracking-wider">
            from the blog
          </span>
        </Link>
        <Link href="">
          Information <br />
          <span className="text-[0.75vw] italic tracking-wider">
            find out more
          </span>
        </Link>
        <Link href="">
          Associate <br />
          <span className="text-[0.75vw] italic tracking-wider">
            Anje&apos;s Portfolio
          </span>
        </Link>
        <Link href="">
          Prints <br />
          <span className="text-[0.75vw] italic tracking-wider">
            tengible goods
          </span>
        </Link>
        <Link href="">
          Say Hello <br />
          <span className="text-[0.75vw] italic tracking-wider">
            get in touch
          </span>
        </Link>
      </ul>

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
