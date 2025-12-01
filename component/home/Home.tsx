import Image from "next/image";
import Link from "next/link";
import Hero from "@/component/Hero";
import { MdVerified } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    // use overflow-hidden for hero
    <main>
      <Hero />
      <section
        id="about"
        className="min-h-[80vh] w-full bg-white flex items-center justify-center py-12 md:py-0"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center overflow-hidden h-full w-[90vw] md:w-[85vw] lg:w-[80vw] gap-8 lg:gap-0">
          <div className="bg-white w-full lg:w-[50%] h-auto lg:h-[80%] flex items-center justify-center">
            <div className="flex items-center justify-center h-auto w-full lg:min-w-[70%] lg:w-fit">
              {/*image container  */}
              <Image
                src="/images/woman-cooking.jpg"
                alt="Woman prepping a healthy salad"
                width={500}
                height={400}
                className="rounded-3xl object-cover h-[40vh] md:h-[50vh] lg:h-[60vh] w-full lg:w-auto"
                priority
              />
            </div>
          </div>

          <div className="bg-white w-full lg:w-[50%] h-auto lg:h-[80%] flex text-black">
            <div className="flex flex-col items-start justify-center gap-6 md:gap-8 lg:gap-10 h-auto lg:h-[60vh]">
              <h2 className="border border-black/20 py-2 px-3 rounded-full text-sm md:text-base">
                About
              </h2>
              <div className="max-w-xl flex flex-col gap-3 md:gap-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  Are you wondering about different ways to stay healthy?
                </h3>
                <p className="text-base md:text-lg lg:text-xl">
                  Nootrio is here to guide you. We break down everyday foods in
                  a simple way, so you can eat better, feel better, and still
                  enjoy the meals you love.
                </p>
                <div className="flex flex-col w-fit items-start justify-between gap-3 md:gap-4 lg:gap-5 text-black text-base md:text-lg">
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-lg md:text-xl" />
                    <span className="text-black">Certified Nutritionist</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-lg md:text-xl" />
                    <span>Innovative</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-lg md:text-xl" />
                    <span>Trusted By Thousands</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-lg md:text-xl" />
                    <span>Experienced</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MdVerified className="text-green-800 text-lg md:text-xl" />
                    <span>Seasoned Experts </span>
                  </div>
                  <a
                    href="/contact"
                    className="flex items-center justify-center bg-white hover:bg-green-800/60 hover:text-lime-300 text-stone-700 gap-2 hover:gap-3 py-2 px-3 md:px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full text-sm md:text-base"
                  >
                    <span>Contact Us</span>
                    <MdOutlineArrowOutward className="text-lg md:text-xl font-extrabold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="min-h-[80vh] bg-emerald-900 flex items-center justify-center gap-4 py-12 md:py-16 lg:py-0"
      >
        <div className="text-black w-[90%] md:w-[85%] lg:w-[80%] h-auto lg:h-[80%] flex flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="w-full lg:w-[50%] h-auto lg:h-full flex flex-col gap-4 md:gap-6 text-white">
            <h2 className="border border-white/20 py-2 px-3 text-white bg-white/10 rounded-full w-fit text-sm md:text-base">
              Services
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
              Yes, we know we can help you
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              Here are the services we can offer
            </p>
            <a
              href="/contact"
              className="flex items-center justify-center w-fit bg-white hover:bg-black/50 hover:text-white text-stone-700 gap-2 hover:gap-3 py-2 px-3 md:px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full text-sm md:text-base"
            >
              <span>Contact Us</span>
              <MdOutlineArrowOutward className="text-lg md:text-xl font-extrabold" />
            </a>
          </div>
          <div className="w-full lg:w-[50%] h-auto lg:h-full text-white flex flex-col gap-4 p-0 md:p-2">
            <a
              href=""
              className="w-full md:w-[85%] lg:w-[70%] flex flex-col gap-2 md:gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-3 md:px-4 py-2 rounded-xl border"
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                Healthy food swaps
              </h3>
              <p className="text-sm md:text-base">
                Easy alternatives that still fit your lifestyle.
              </p>
              <div className="flex items-center gap-2 underline w-fit text-sm md:text-base">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
            </a>
            <a
              href=""
              className="w-full md:w-[85%] lg:w-[70%] flex flex-col gap-2 md:gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-3 md:px-4 py-2 rounded-xl border"
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                Meal breakdowns
              </h3>
              <p className="text-sm md:text-base">
                Simple explanations of what&apos;s inside your meals.
              </p>
              <div className="flex items-center gap-2 underline w-fit text-sm md:text-base">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
            </a>
            <a
              href=""
              className="w-full md:w-[85%] lg:w-[70%] flex flex-col gap-2 md:gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-3 md:px-4 py-2 rounded-xl border"
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                Simple nutrition guides
              </h3>
              <p className="text-sm md:text-base">
                Short guides to help you eat better without stress.
              </p>
              <div className="flex items-center gap-2 underline w-fit text-sm md:text-base">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
            </a>
            <a
              href=""
              className="w-full md:w-[85%] lg:w-[70%] flex flex-col gap-2 md:gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-3 md:px-4 py-2 rounded-xl border"
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                Personalized Q&A
              </h3>
              <p className="text-sm md:text-base">
                Answers to common food and health questions in plain language.
              </p>
              <div className="flex items-center gap-2 underline w-fit text-sm md:text-base">
                <span>Learn more</span>
                <FaArrowRightLong />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white min-h-[80vh] w-full flex flex-col items-center justify-center py-12 md:py-16 lg:py-0">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] h-auto lg:h-[80%] text-black flex flex-col gap-4 md:gap-6 items-center justify-center">
          <h2 className="border border-black/20 py-2 px-3 rounded-full text-sm md:text-base">
            Blog
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center px-4">
            Read our latest blog posts for tips and insights on healthy eating.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-2 w-full">
            <Link
              href="/blog/5-filling-breakfast-ideas"
              className="flex flex-col gap-3 md:gap-4 border overflow-hidden border-black/10 items-start rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src="/images/blog-1.jpg"
                  alt="Blog Image"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 p-3 md:p-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  5 Filling Breakfast Ideas
                </h3>
                <p className="text-sm md:text-base">
                  Easy breakfast ideas using normal foods that help people stay
                  full till later in the day.
                </p>
                <div className="flex items-center gap-2 underline w-fit text-sm md:text-base">
                  <span>Learn more</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </Link>
            <Link
              href="/blog/healthy-eating-on-a-budget"
              className="flex flex-col gap-3 md:gap-4 border overflow-hidden border-black/10 items-start rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src="/images/blog-2.jpg"
                  alt="Blog Image"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 p-3 md:p-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  Healthy Eating on a Budget
                </h3>
                <p className="text-sm md:text-base">
                  Helping people pick snacks that do not spike their sugar and
                  make them feel lazy or guilty.
                </p>
                <div className="flex items-center gap-2 underline w-fit text-sm md:text-base">
                  <span>Learn more</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </Link>
            <Link
              href="/blog/better-snack-choices"
              className="flex flex-col gap-3 md:gap-4 border overflow-hidden border-black/10 items-start rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src="/images/blog-3.jpg"
                  alt="Blog Image"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 p-3 md:p-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  Better Snack Choices
                </h3>
                <p className="text-sm md:text-base">
                  Show people they do not need expensive &quot;fitness foods&quot; to eat healthy.
                </p>
                <div className="flex items-center gap-2 underline w-fit text-sm md:text-base">
                  <span>Learn more</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </Link>
          </div>
          <a
            href="/contact"
            className="flex items-center justify-center bg-white hover:bg-green-800/60 hover:text-white text-stone-700 gap-2 hover:gap-3 py-2 px-3 md:px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full text-sm md:text-base"
          >
            <span>Contact Us</span>
            <MdOutlineArrowOutward className="text-lg md:text-xl font-extrabold" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
