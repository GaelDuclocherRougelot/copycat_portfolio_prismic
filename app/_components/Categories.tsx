"use client";

import { HomeDocumentDataCategoriesItem, Simplify } from "@/prismicio-types";
import { GroupField, KeyTextField } from "@prismicio/client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type CategoryType = {
  name: KeyTextField | undefined;
  image_url: string | null | undefined;
};

export default function Categories({
  categories,
}: {
  categories: GroupField<Simplify<HomeDocumentDataCategoriesItem>>;
}) {
  const [currentCategory, setCurrentCategory] = useState<CategoryType>({
    name: categories[0]?.category_name,
    image_url: categories[0]?.category_image.url,
  });

  return (
    <section className="flex gap-4 items-center justify-center max-w-[1420px] w-full h-full px-8 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col gap-20 md:gap-28 flex-1 text-grayCaption w-full"
      >
        <h3 className="text-center lg:w-36 text-3xl tracking-[0.5rem]">
          Browse Categories
        </h3>
        <ul className="flex flex-col items-center lg:items-start gap-10 w-full text-xl md:text-2xl md:pl-12">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <li
                onMouseOver={() =>
                  setCurrentCategory({
                    name: category.category_name,
                    image_url: category.category_image.url,
                  })
                }
                className="flex gap-10 cursor-pointer group text-[1.2rem]"
                key={index}
              >
                <span>0{index + 1}.</span>{" "}
                <span className="group-hover:underline italic">
                  {category.category_name}
                </span>
              </li>
            ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="hidden lg:flex flex-[2]"
      >
        <Image
          src={currentCategory.image_url ?? "/1.jpg"}
          alt="landscape"
          loading="lazy"
          width={1920}
          height={1080}
          className="aspect-video object-cover"
        />
      </motion.div>
    </section>
  );
}
