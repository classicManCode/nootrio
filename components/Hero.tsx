import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="w-full h-full">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Image"
          width={2000}
          height={1333}
          className="w-full h-full object-cover rounded-xl"
          priority
        />

        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col h-full w-full justify-center px-4 md:px-8 lg:pl-10">
        <div className="w-[90%] md:w-[70%] lg:max-w-[60%] xl:max-w-[30%] bg-white/20 flex flex-col gap-2 md:gap-3 items-start justify-center md:ml-6 lg:ml-10 rounded-xl py-4 px-3 md:py-6 md:px-4">
          <span className="bg-white/30 p-2 md:p-3 lg:p-4 rounded-full w-fit backdrop-blur-[5px] text-sm md:text-base">
            Nootrio — Nutrition Hub{" "}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase">
            Learn how to eat healthy
          </h1>
          <p className="text-sm md:text-base">
            Discover what is really on your plate. At Nootrio, we break down the
            pros and cons of everyday foods, show you healthier swaps, and help
            you build simple, tasty meals that actually support your health
            long-term.
          </p>
          <a
            href="#contact"
            className="flex items-center justify-center bg-white hover:bg-green-800/60 hover:text-lime-300 text-stone-700 gap-2 hover:gap-3 py-2 px-3 md:px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full text-sm md:text-base"
          >
            <span>Contact Us</span>
            <MdOutlineArrowOutward className="text-lg md:text-xl font-extrabold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
