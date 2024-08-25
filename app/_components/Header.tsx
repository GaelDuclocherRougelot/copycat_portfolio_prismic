import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className="absolute z-50 top-0 left-0 w-full flex items-center justify-between md:justify-center py-[21px] px-[28px] md:py-[51px] md:px-[60px]">
      <ul className="hidden text-center md:flex md:gap-10 lg:gap-[73px] justify-between tracking-[0.2rem] text-white">
        <Link href="">
          Featured <br />
          <span className="text-xs italic tracking-wider">published work</span>
        </Link>
        <Link href="">
          Categories <br />
          <span className="text-xs italic tracking-wider">from the blog</span>
        </Link>
        <Link href="">
          Information <br />
          <span className="text-xs italic tracking-wider">find out more</span>
        </Link>
        <Link href="">
          Associate <br />
          <span className="text-xs italic tracking-wider">
            Anje's Portfolio
          </span>
        </Link>
        <Link href="">
          Prints <br />
          <span className="text-xs italic tracking-wider">tengible goods</span>
        </Link>
        <Link href="">
          Say Hello <br />
          <span className="text-xs italic tracking-wider">get in touch</span>
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
      <i>O</i>
    </header>
  );
}
