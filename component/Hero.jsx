import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="h-full">
      <Image src="/hero-image.png" alt="Hero image" fill priority />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center pl-30">
        <div className="bg-white/10 backdrop-blur-[5px] max-w-[35%] flex flex-col items-start justify-center gap-4 px-4 py-6 rounded-xl">
          <span className="bg-white/30 py-2 px-4 rounded-full">Nootrio — Nutrition Hub</span>
          <h1 className="text-4xl md:text-3xl font-bold uppercase text-white">Learn how to start eating healthy</h1>
          <p>Discover what is really on your plate. At Nootrio, we break down the pros and cons of everyday foods, show you healthier swaps, and help you build simple, tasty meals that actually support your health long-term.</p>
          <Link href="/contact" className="bg-white cursor-pointer hover:bg-lime-700/70 hover:backdrop-blur-2xl hover:text-lime-200 transition hover:-translate-y-1 duration-300 hover:gap-3 flex px-4 py-2 rounded-full justify-center items-center text-black gap-2">
            <span>Contact Us</span>
            <MdOutlineArrowOutward />
          </Link>
        </div>      
      </div>
    </section>
  );
};

export default Hero;
