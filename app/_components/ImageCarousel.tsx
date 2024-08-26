"use client";
import { HomeDocumentDataImageGalleryItem, Simplify } from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import Image from "next/image";
import Slider from "react-slick";

export default function ImageCarousel({
  images,
}: {
  images: GroupField<Simplify<HomeDocumentDataImageGalleryItem>>;
}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };
  return (
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
            width={4000}
            height={4000}
            alt=""
            className="h-full w-full object-cover"
          />
          <Image
            src="2.jpg"
            quality={100}
            width={4000}
            height={4000}
            alt=""
            className="h-full w-full object-cover"
          />
          <Image
            src="3.jpg"
            quality={100}
            width={4000}
            height={4000}
            alt=""
            className="h-full w-full object-cover"
          />
        </>
      )}
    </Slider>
  );
}
