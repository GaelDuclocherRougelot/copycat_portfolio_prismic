"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { PiArrowUpThin } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col gap-16 divide-gray-300 divide-y px-10 lg:px-0 mt-20 md:mx-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 divide-gray-300 divide-y lg:divide-y-0 lg:divide-x md:px-10 lg:px-0 text-grayCaption">
        <div className="flex justify-center items-center w-full md:px-12">
          <Image
            src="/logo.png"
            width={350}
            height={100}
            alt="logo"
            className="mb-12"
          />
        </div>
        <div className="flex flex-col items-center gap-8 w-full md:px-12">
          <h4 className="tracking-[0.2rem] text-[1rem]">SEE MORE</h4>
          <ul className="flex flex-col gap-1 [&>li]:underline [&>li]:font-caption [&>li]:cursor-pointer ml-6 font-semibold">
            <li>Say Hello</li>
            <li>Featured</li>
            <li>Weddings</li>
            <li>Elopements</li>
            <li>For Photographers</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-10 w-full md:px-12">
          <h4 className="tracking-[0.2rem]">SOCIAL</h4>
          <ul className="flex gap-8 [&>li]:cursor-pointer">
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
        <div className="flex flex-col gap-8 w-full md:pl-12">
          <h4 className="tracking-[0.2rem]">SIGN UP FOR MORE INFO</h4>
          <p className="italic text-sm">
            Be the first to know about learning opportunities. Workshops,
            giveaways, presets, videos, etc.
          </p>
          <form className="mt-10 w-full mb-9">
            <div className="flex">
              <input
                type="email"
                className="border border-r-0 py-4 px-5 text-sm italic w-full tracking-[0.2rem] text-gray-500 placeholder:text-gray-500"
                placeholder="Email address"
              />
              <button className="py-4 px-5 border border-l-0 bg-gray-200">
                <BsChevronRight size={11} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 pt-24 pb-24">
        <Image
          src="/flothemes-logo.png"
          alt="flothemes icon"
          width={16}
          height={16}
          className="opacity-70"
        />
        <p className="text-grayCaption tracking-[0.2rem]">
          © 2024 Benj Haisch
        </p>
        <Link href="#home">
          <PiArrowUpThin size={20} />
        </Link>
      </div>
    </motion.footer>
  );
}
