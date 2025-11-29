import Image from "next/image";
import Hero from "@/component/Hero";
import { MdVerified } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    // use overflow-hidden for hero
    <main>
      <Hero />
      <section className="h-[80vh] w-full bg-white flex items-center justify-center">
        <div className="flex items-center justify-center overflow-hidden h-full w-[80vw] bg-black">
          <div className="bg-black w-[50%] h-[80%] flex itmes-center justify-center">
            <div className="flex items-center justify-center h-auto min-w-[70%] w-fit ">
               {/*image container  */}
              <Image
            src="/images/woman-cooking.jpg"
            alt="Woman prepping a healthy salad"
            width={500}
            height={400}
            className="rounded-3xl object-cover h-[60vh] w-auto"
            priority
          />
            </div>
            
          </div>
          
        <div className="bg-black w-[50%] h-[80%] flex">
          <div className="flex flex-col items-start justify-center gap-10 h-[60vh]">
            <h2 className="border border-white py-2 px-3 rounded-full">
              About
            </h2>
            <div className="max-w-xl flex flex-col gap-4">
              <h3>Are you wondering about different ways to stay healthy?</h3>
              <p>
                Nootrio is here to guide you. We break down everyday foods in a
                simple way, so you can eat better, feel better, and still enjoy
                the meals you love.
              </p>
              <div className="flex flex-col w-fit items-start justify-between gap-5">
                <div className="inline-flex items-center gap-2">
                  <MdVerified />
                  <span>Certified Nutritionist</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <MdVerified />
                  <span>Innovative</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <MdVerified />
                  <span>Trusted By Thousands</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <MdVerified />
                  <span>Experienced</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <MdVerified />
                  <span>Seasoned Experts </span>
                </div>
                <a
                  href="/contact"
                  className="flex items-center justify-center bg-white hover:bg-green-800/60 hover:text-lime-300 text-stone-700 gap-2 hover:gap-3 py-2 px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full"
                >
                  <span>Contact Us</span>
                  <MdOutlineArrowOutward className="text-xl font-extrabold" />
                </a>
              </div>
            </div>
          </div>
        </div>
          
        </div>
      </section>

      <section className="bg-green-700 h-[80vh] flex items-center justify-center gap-4">
        <div className="bg-black w-[80%] h-[80%] flex">
          <div className="w-[50%] h-full bg-white">
            <h2>Services</h2>
            <h3>Yes, we know we can help you</h3>
            <p>Here are the services we can offer</p>
            <a
                  href="/contact"
                  className="flex items-center justify-center w-fit bg-white hover:bg-green-800/60 hover:text-lime-300 text-stone-700 gap-2 hover:gap-3 py-2 px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full"
                >
                  <span>Contact Us</span>
                  <MdOutlineArrowOutward className="text-xl font-extrabold" />
                </a>
          </div>
          <div className="w-[50%] h-full bg-black">
            <a href="" className="w-[70%] flex flex-col">
              <h3></h3>
              <p></p>
              <div></div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
