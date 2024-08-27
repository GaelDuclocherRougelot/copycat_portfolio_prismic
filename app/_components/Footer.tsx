"use client";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { PiArrowUpThin } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-16 divide-y px-10 lg:px-0 mt-20 md:mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x md:px-10 lg:px-0 text-grayCaption">
        <div className="flex justify-center items-center w-full py-10 md:p-[50px]">
          <Image src="/logo.png" width={200} height={100} alt="logo" />
        </div>
        <div className="flex flex-col gap-4 w-full py-10 md:p-[50px]">
          <h4 className="tracking-[0.2rem]">SEE MORE</h4>
          <ul className="flex flex-col gap-2 [&>li]:underline [&>li]:font-caption [&>li]:cursor-pointer">
            <li>Say Hello</li>
            <li>Featured</li>
            <li>Weddings</li>
            <li>Elopements</li>
            <li>For Photographers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-full py-10 md:p-[50px]">
          <h4 className="tracking-[0.2rem]">SOCIAL</h4>
          <ul className="flex gap-6 [&>li]:cursor-pointer">
            <li>
              <AiFillInstagram color="#6b6764" />
            </li>
            <li>
              <TiSocialFacebook color="#6b6764" />
            </li>
            <li>
              <FaPinterestP color="#6b6764" />
            </li>
            <li>
              <TfiYoutube color="#6b6764" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-full py-10 md:p-[50px]">
          <h4 className="tracking-[0.2rem]">SIGN UP FOR MORE INFO</h4>
          <p className="italic text-sm">
            Be the first to know about learning opportunities. Workshops,
            giveaways, presets, videos, etc.
          </p>
          <form className="mt-10 w-full">
            <input
              type="email"
              className="border py-4 px-5 text-sm italic w-full"
              placeholder="Email address"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 py-10 md:p-[70px]">
        <p className="text-grayCaption tracking-[0.2rem]">
          © 2024 Benj Haisch
        </p>
        <PiArrowUpThin size={30} />
      </div>
    </footer>
  );
}
