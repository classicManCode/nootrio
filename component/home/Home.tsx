import Image from "next/image";
import Hero from "@/component/Hero";
import { MdVerified } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    // use overflow-hidden for hero
    <main>
      <Hero />
      <section id="about" className="h-[80vh] w-full bg-white flex items-center justify-center">
        <div className="flex items-center justify-center overflow-hidden h-full w-[80vw]">
          <div className="bg-white w-[50%] h-[80%] flex itmes-center justify-center">
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

          <div className="bg-white w-[50%] h-[80%] flex text-black">
            <div className="flex flex-col items-start justify-center gap-10 h-[60vh]">
              <h2 className="border border-black/20 py-2 px-3 rounded-full">
                About
              </h2>
              <div className="max-w-xl flex flex-col gap-4">
                <h3 className="text-3xl font-semibold">Are you wondering about different ways to stay healthy?</h3>
                <p className="text-xl">
                  Nootrio is here to guide you. We break down everyday foods in
                  a simple way, so you can eat better, feel better, and still
                  enjoy the meals you love.
                </p>
                <div className="flex flex-col w-fit items-start justify-between gap-5 text-black text-lg">
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-xl" />
                    <span className="text-black">Certified Nutritionist</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-xl" />
                    <span>Innovative</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-xl" />
                    <span>Trusted By Thousands</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-xl" />
                    <span>Experienced</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-xl" />
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

      <section id="services" className="h-[80vh] bg-emerald-900 flex items-center justify-center gap-4">
        <div className=" text-black w-[80%] h-[80%] flex">
          <div className="w-[50%] h-full flex flex-col gap-4 text-white">
            <h2 className="border border-white/20 py-2 px-3 text-white bg-white/10 rounded-full w-fit">
              Services
            </h2>
            <h3 className="text-3xl font-semibold text-white/90">Yes, we know we can help you</h3>
            <p className="text-white/70">Here are the services we can offer</p>
            <a
              href="/contact"
              className="flex items-center justify-center w-fit bg-white hover:bg-black/50 hover:text-white text-stone-700 gap-2 hover:gap-3 py-2 px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full"
            >
              <span>Contact Us</span>
              <MdOutlineArrowOutward className="text-xl font-extrabold" />
            </a>
          </div>
          <div className="w-[50%] h-full text-white flex flex-col gap-4 p-2">
            <a
              href=""
              className="w-[70%] flex flex-col gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-4 py-2 rounded-xl border"
            >
              <h3 className="text-2xl font-semibold">Healthy food swaps</h3>
              <p>Easy alternatives that still fit your lifestyle.</p>
              <div className="flex items-center gap-2 underline w-fit">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
            </a>
            <a
              href=""
              className="w-[70%] flex flex-col gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-4 py-2 rounded-xl border"
            >
              <h3 className="text-2xl font-semibold">Meal breakdowns</h3>
              <p>Simple explanations of what&apos;s inside your meals.</p>
              <div className="flex items-center gap-2 underline w-fit">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
            </a>
            <a
              href=""
              className="w-[70%] flex flex-col gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-4 py-2 rounded-xl border"
            >
              <h3 className="text-2xl font-semibold">Simple nutrition guides</h3>
              <p>Short guides to help you eat better without stress.</p>
              <div className="flex items-center gap-2 underline w-fit">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
            </a>
            <a
              href=""
              className="w-[70%] flex flex-col gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-4 py-2 rounded-xl border"
            >
              <h3 className="text-2xl font-semibold">Personalized Q&A</h3>
              <p>
                Answers to common food and health questions in plain language.
              </p>
              <div className="flex items-center gap-2 underline w-fit">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white h-[80vh] w-full flex flex-col items-center justify-center">
        <div className="w-[80%] h-[80%] text-black flex flex-col gap-6 items-center justify-center">
          <h2 className="border border-black/20 py-2 px-3 rounded-full">Blog</h2>
          <p className="text-2xl">
            Read our latest blog posts for tips and insights on healthy eating.
          </p>
          <div className="grid grid-cols-3 gap-4 p-2">
            <article className="flex flex-col gap-4 border overflow-hidden border-black/10 items-start rounded-2xl">
              <div className="w-full h-64 overflow-hidden">
                <Image
                  src="/images/blog-1.jpg"
                  alt="Blog Image"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-2">
                <h3>5 Filling Breakfast Ideas</h3>
              <p>
                Easy breakfast ideas using normal foods that help people stay
                full till later in the day.
              </p>
              <div className="flex items-center gap-2 underline w-fit">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
              </div>
              
            </article>
            <article className="flex flex-col gap-4 border overflow-hidden border-black/10 items-start rounded-2xl">
              <div className="w-full h-64 overflow-hidden">
                <Image
                  src="/images/blog-2.jpg"
                  alt="Blog Image"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-2">
                 <h3>Healthy Eating on a Budget</h3>
              <p>
                Helping people pick snacks that do not spike their sugar and
                make them feel lazy or guilty.
              </p>
              <div className="flex items-center gap-2 underline w-fit">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
              </div>
             
            </article>
            <article className="flex flex-col gap-4 border overflow-hidden border-black/10 items-start rounded-2xl">
              <div className="w-full h-64 overflow-hidden">
                <Image
                  src="/images/blog-3.jpg"
                  alt="Blog Image"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-2">
                 <h3>Better Snack Choices</h3>
              <p>
                Show people they do not need expensive “fitness foods” to eat
                healthy.
              </p>
              <div className="flex items-center gap-2 underline w-fit">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
              </div>
             
            </article>
          </div>
          <a
            href="/contact"
            className="flex items-center justify-center bg-white hover:bg-green-800/60 hover:text-white text-stone-700 gap-2 hover:gap-3 py-2 px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full"
          >
            <span>Contact Us</span>
            <MdOutlineArrowOutward className="text-xl font-extrabold" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
