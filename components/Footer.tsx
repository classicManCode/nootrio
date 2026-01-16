import { MdEmail } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section
        id="contact"
        className='relative min-h-[50vh] w-full bg-[url("/images/contact-hero.jpg")] bg-cover bg-center '
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-50 flex flex-col h-full min-h-[50vh] items-center justify-center gap-4 md:gap-6 py-12 md:py-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center px-4">
            Let&apos;s get to know you
          </h2>
          <p className="text-sm md:text-base text-center px-4">
            Start your health jounrey today.
          </p>
          <a
            href="/contact"
            className="flex items-center justify-center bg-white hover:bg-green-800/60 hover:text-lime-300 text-stone-700 gap-2 hover:gap-3 py-2 px-3 md:px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full w-fit text-sm md:text-base"
          >
            <span>Book a consultation</span>
            <MdOutlineArrowOutward className="text-lg md:text-xl font-extrabold" />
          </a>
          <div className="flex items-center cursor-pointer gap-2 no-underline w-fit text-sm md:text-base">
            <MdEmail />
            <a href="mailto:legenderyprime@gmail.com?subject=I%20would%20like%20to%20book%20a%20consultation">
              email us
            </a>
          </div>
        </div>
      </section>
      <section className="h- w-full text-black bg-stone-200 flex flex-col items-center">
        <div className="flex flex-col w-[90%] md:w-[85%] lg:w-[80%]">
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-8 md:gap-12 pt-12 md:pt-16 lg:pt-20">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-5">
                Navigation
              </h2>
              <ul className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="#services">Services</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-5">
                Contact
              </h2>
              <ul className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <li>
                  <Link href="/services">Book a consultation</Link>
                </li>
                <li>
                  <a href="mailto:legenderyprime@gmail.com?subject=I%20would%20like%20to%20book%20a%20consultation">
                    legenderyprime@gmail.com
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-4 md:mt-6">
                <a
                  href="https://www.threads.com/@jiggybenn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaThreads />
                </a>
                <a
                  href="https://x.com/Classicmancode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://github.com/classicManCode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-5">
                Join our newsletter!
              </h2>
              <form action="">
                <div className="flex flex-col gap-2 justify-center">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    name="email"
                    required
                    className="border border-black/20 rounded-md w-full md:w-64 h-10 pl-2 placeholder:text-black/20 focus:border-black/20 focus:outline-none text-sm md:text-base"
                  />
                  <button className="rounded-md py-2 bg-green-800/60 focus:bg-green-800/90 hover:bg-green-900 hover:text-lime-100 transition-all duration-300 text-white cursor-pointer text-sm md:text-base">
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-stone-700 w-full h-px my-5"></div>
          <div className="flex flex-col items-center mb-5 justify-center">
            <h2 className="text-sm md:text-base text-center">
              &copy; {new Date().getFullYear()} Nootrio. All rights reserved.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
