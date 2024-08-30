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
      className="flex flex-col md:gap-16 divide-gray-300 divide-y px-8 lg:px-12 mt-32 md:mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 divide-gray-300 divide-y md:divide-y-0 md:divide-x text-grayCaption">
        <div className="flex justify-center items-center w-full md:px-12">
          <Image
            src="/logo.png"
            width={350}
            height={100}
            alt="logo"
            className="mb-12 md:w-[20vw]"
          />
        </div>
        <div className="flex flex-col items-center gap-16 md:gap-8 w-full py-12 md:py-4">
          <h4 className="tracking-[0.2rem] text-[3.35vw] md:text-[1vw]">
            SEE MORE
          </h4>
          <ul className="flex flex-col gap-1 [&>li]:underline [&>li]:font-caption [&>li]:cursor-pointer font-semibold text-center md:text-start [&>li]:text-[3.1vw] [&>li]:md:text-[1vw] md:ml-[1.5vw]">
            <li>Say Hello</li>
            <li>Featured</li>
            <li>Weddings</li>
            <li>Elopements</li>
            <li>For Photographers</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-10 w-full py-12 md:py-4">
          <h4 className="tracking-[0.2rem] text-[3.35vw] md:text-[1vw]">
            SOCIAL
          </h4>
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
        <div className="flex flex-col gap-8 w-full py-12 md:py-4 md:pl-12">
          <h4 className="tracking-[0.2rem] text-[3.35vw] md:text-[1vw] text-center md:text-start">
            SIGN UP FOR MORE INFO
          </h4>
          <p className="italic text-[2.8vw] md:text-[0.75vw] text-center md:text-start">
            Be the first to know about learning opportunities. Workshops,
            giveaways, presets, videos, etc.
          </p>
          <form className="mt-10 w-full md:mb-10">
            <div className="flex">
              <input
                type="email"
                className="border border-r-0 text-[10px] py-3 px-5 md:py-[0.90vw] md:px-[1.2vw] md:text-[0.75vw] italic w-full tracking-[0.2rem] text-gray-500 placeholder:text-gray-500"
                placeholder="Email address"
              />
              <button className="py-3 px-4 md:py-[0.90vw] md:px-[1.2vw] border border-l-0 bg-gray-200">
                <BsChevronRight size={11} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 md:gap-8 py-12 md:py-20">
        <Image
          src="/flothemes-logo.png"
          alt="flothemes icon"
          width={12}
          height={12}
          className="opacity-70"
        />
        <p className="text-grayCaption text-xs tracking-[0.2rem] md:text-[1vw]">
          © 2024 Benj Haisch
        </p>
        <Link href="#home">
          <PiArrowUpThin size={20} />
        </Link>
      </div>
    </motion.footer>
  );
}
