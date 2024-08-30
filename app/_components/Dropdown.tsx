"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dropdown({ links }: { links: Array<string> }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute left-1/2 transform -translate-x-1/2 w-fit h-fit bg-slate-50 mt-3 z-50 px-[5vw] py-10 grid place-content-center"
    >
      <div className="w-4 h-4 bg-slate-50 absolute z-40 -top-1 rotate-45 left-1/2 transform -translate-x-1/2"></div>
      <ul className="flex flex-col gap-6">
        {links &&
          links.map((link, index) => (
            <Link
              href={link.toLowerCase()}
              className="text-grayCaption text-nowrap md:text-[1vw]"
            >
              {link}
            </Link>
          ))}
      </ul>
    </motion.div>
  );
}