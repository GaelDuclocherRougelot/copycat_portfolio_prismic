import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle("home");
  const images = page.data.image_gallery;
  return (
    <>
      <Header />
      <Hero images={images}/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Gaël duclocher</h1>
      </main>
    </>
  );
}
