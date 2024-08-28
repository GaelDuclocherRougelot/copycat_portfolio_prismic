"use client";
import { HomeDocumentDataImageGalleryItem, Simplify } from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function ImageCarousel({
  images,
}: {
  images: GroupField<Simplify<HomeDocumentDataImageGalleryItem>>;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timeout = setTimeout(() => setAnimate(false), 300);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <>
      <div className="absolute right-20 bottom-10 z-50 text-white text-[1.80rem] flex items-center gap-2 overflow-hidden">
        <span
          className={`${
            animate ? "animate-slide-down" : ""
          } transition-transform duration-300 ease-in-out`}
        >
          {currentSlide + 1}
        </span>
        <div className="w-5 h-[0.7px] bg-white"></div>
        <span>{images.length}</span>
      </div>
      <Slider {...settings} className="z-0 h-screen w-screen">
        {images.length > 0 ? (
          images.map((img) => (
            <Image
              src={img.image.url ?? "1.jpg"}
              key={img.image?.id ?? `fallback-${Math.random()}`}
              quality={100}
              width={2260}
              height={1440}
              alt=""
              className="h-full w-full object-cover"
            />
          ))
        ) : (
          <>
            <Image
              src="1.jpg"
              quality={100}
              width={2260}
              height={1440}
              alt=""
              className="h-full w-full object-cover"
            />
            <Image
              src="2.jpg"
              quality={100}
              width={2260}
              height={1440}
              alt=""
              className="h-full w-full object-cover"
            />
            <Image
              src="3.jpg"
              quality={100}
              width={2260}
              height={1440}
              alt=""
              className="h-full w-full object-cover"
            />
          </>
        )}
      </Slider>
    </>
  );
}
