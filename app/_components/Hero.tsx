import { HomeDocumentDataImageGalleryItem, Simplify } from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import ImageCarousel from "./ImageCarousel";

export default function Hero({
  images,
}: {
  images: GroupField<Simplify<HomeDocumentDataImageGalleryItem>>;
}) {
  return (
    <section
      id="home"
      className="relative z-0 w-screen h-screen overflow-hidden"
    >
      <Image
        src="/logo.png"
        width={200}
        height={100}
        alt="logo"
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 filter invert opacity-80 select-none"
      />
      <Link
        href={"#about"}
        className="hidden md:flex flex-col items-center gap-6 absolute text-nowrap bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-white text-[0.92vw] tracking-[0.3rem] uppercase"
      >
        Scroll down for more
        <HiChevronDown
          size={"1vw"}
          color="white"
          className="animate-slide-down-infinite"
        />
      </Link>
      <ImageCarousel images={images} />
    </section>
  );
}
