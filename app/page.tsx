import { createClient } from "@/prismicio";
import About from "./_components/About";
import Categories from "./_components/Categories";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import ImageGrid from "./_components/ImageGrid";
import Footer from "./_components/Footer";

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle("home");
  const images = page.data.image_gallery;
  const categories = page.data.categories;
  const imagesGrid = page.data.image_grid;
  return (
    <>
      <Header />
      <Hero images={images} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <About />
        <ImageGrid images={imagesGrid} />
        <Categories categories={categories} />
      </main>
      <Footer />
    </>
  );
}
