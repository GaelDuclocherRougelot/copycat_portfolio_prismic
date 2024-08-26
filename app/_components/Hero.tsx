import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import Link from "next/link";
import { GroupField } from "@prismicio/client";
import { HomeDocumentDataImageGalleryItem, Simplify } from "@/prismicio-types";

export default function Hero({images}: {images: GroupField<Simplify<HomeDocumentDataImageGalleryItem>>}) {
  return (
    <section className="relative z-0 w-screen h-screen overflow-hidden">
      <Image
        src="/logo.png"
        width={200}
        height={100}
        alt="logo"
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 filter invert opacity-80 select-none"
      />
      <Link href={"#about"} className="absolute text-nowrap bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-white text-[1rem] tracking-[0.2rem] uppercase">
        Scroll down for more
      </Link>
      <ImageCarousel images={images}/>
    </section>
  );
}
