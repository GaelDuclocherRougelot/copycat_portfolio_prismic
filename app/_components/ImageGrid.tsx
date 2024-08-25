import { HomeDocumentDataImageGalleryItem, Simplify } from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import Image from "next/image";

export default function ImageGrid({
  images,
}: {
  images: GroupField<Simplify<HomeDocumentDataImageGalleryItem>>;
}) {
  return (
    <section className="w-full h-full flex items-center justify-center p-8 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1420px] gap-6 w-full">
        {images.map((img) => (
          <div className="relative group">
            <Image
              src={img.image.url ?? "1.jpg"}
              alt="picture"
              width={300}
              height={500}
              quality={100}
              className="aspect-[3/4] object-cover w-full"
            />
            <div className="absolute w-full h-full top-0 left-0 p-2">
              <div className="group-over w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-white transition-all duration-500 p-10 gap-6 cursor-pointer overflow-hidden">
                <Image
                  src={"/map-icon.jpg"}
                  alt="map icon"
                  width={100}
                  height={100}
                  quality={100}
                />
                <p className="text-center text-lg text-ellipsis">
                  KUALOA RANCH WEDDING
                </p>
                <button className="text-white bg-[#6b6764] py-2 px-8 text-sm tracking-[0.2rem] border-none">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="md:hidden w-full flex flex-col items-center justify-center bg-white p-10 gap-6 overflow-hidden">
              <Image
                src={"/map-icon.jpg"}
                alt="map icon"
                width={100}
                height={100}
                quality={100}
              />
              <p className="text-center text-lg text-ellipsis">
                KUALOA RANCH WEDDING
              </p>
              <button className="text-white bg-[#6b6764] py-2 px-8 text-sm tracking-[0.2rem] border-none">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
