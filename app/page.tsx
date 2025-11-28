import Image from "next/image";
import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";


const Page = () => {
  return (
    <main className="relative h-screen w-full">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Page;
