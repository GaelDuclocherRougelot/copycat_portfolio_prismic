import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="w-full lg:w-screen lg:h-screen flex items-center justify-center py-16">
      <div className="max-w-[969px] flex flex-col-reverse lg:flex-row items-center justify-center text-grayCaption gap-16">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-[18px] items-center">
            <Image src="/map-icon.jpg" width={80} height={80} alt="map-icon" />
            <h3 className="text-[2.40rem] tracking-[0.5rem]">Hi, I'm Benj.</h3>
          </div>

          <div className="text-[0.950rem] font-light font-caption tracking-[0.2rem] flex flex-col gap-3 p-8 w-full md:w-[460px]">
            <div>
              <p>I think marriage is awesome.</p>
              <p>I love photography, weddings, and the outdoors.</p>
            </div>

            <p>
              I’d love to help create your visual history through the moments
              we’ll share at your wedding. I’m actually more interested in what
              you’ll think of your photos 20+ years from now than when you first
              receive them. Those are the moments and relationships that mean
              something to me.
            </p>
            <p>Marriage is an adventure. Let’s explore.</p>
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
        <div className="bg-[#fafafa] p-12 w-full">
          <Image
            src="/benj_photographer.jpg"
            alt="picture of photographer"
            width={700}
            height={900}
            quality={100}
            className="md:min-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
