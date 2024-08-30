"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="w-screen lg:h-screen flex items-center justify-center py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center lg:max-h-[35vw] justify-center text-grayCaption w-full lg:max-w-[60vw] gap-10 lg:gap-0"
      >
        <div className="flex flex-col justify-between items-center h-full w-full lg:min-w-[300px] lg:w-[40vw]">
          <div className="flex flex-col gap-[18px] items-center xl:mb-[0vw]">
            <Image
              src="/map-icon.jpg"
              width={200}
              height={200}
              alt="map-icon"
              className="w-[80px] md:w-[4.5vw]"
            />
            <h3 className="text-2xl md:text-[2.23vw] tracking-[0.7rem]">
              Hi, I&apos;m Benj.
            </h3>
          </div>

          <div className="text-sm md:text-[0.92vw] font-light font-caption tracking-[0.2rem] flex flex-col gap-3 p-8 w-full lg:leading-[1.6vw]">
            <div>
              <p>I think marriage is awesome.</p>
              <p>I love photography, weddings, and the outdoors.</p>
            </div>

            <p>
              I&apos;d love to help create your visual history through the
              moments we&apos;ll share at your wedding. I&apos;m actually more
              interested in what you&apos;ll think of your photos 20+ years from
              now than when you first receive them. Those are the moments and
              relationships that mean something to me.
            </p>
            <p>Marriage is an adventure. Let&apos;s explore.</p>
            <div className="flex flex-col gap-2">
              <Link href="#" className="underline font-semibold tracking-wider">
                Read More About Benj
              </Link>
              <Link href="#" className="underline font-semibold tracking-wider">
                Read More About Benj&apos;s Approach
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] p-6 lg:p-[3vw] lg:ml-[1.5vw] w-full lg:w-[40vw]">
          <Image
            src="/benj_photographer.jpg"
            alt="picture of photographer"
            width={900}
            height={1200}
            quality={100}
            className="object-cover w-full lg:w-[50vw] h-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
