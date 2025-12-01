import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BiDish } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
        {/* Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-green-800/10 rounded-full blur-3xl"></div>
          <div className="relative bg-emerald-900/10 p-6 md:p-8 rounded-full">
            <BiDish className="text-6xl md:text-8xl text-green-800" />
          </div>
        </div>

        {/* Error Code */}
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="text-7xl md:text-9xl font-bold text-green-800/20">
            404
          </h1>
          <div className="border border-black/20 py-2 px-4 rounded-full w-fit mx-auto">
            <span className="text-sm md:text-base text-black/70">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-3 md:gap-4 max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Oops! This page seems to be off the menu
          </h2>
          <p className="text-base md:text-lg text-black/70">
            The page you are looking for does not exist. It might have been moved
            or deleted, or perhaps you mistyped the URL.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="flex items-center justify-center bg-green-800 hover:bg-green-900 text-white gap-2 hover:gap-3 py-3 px-6 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full text-sm md:text-base"
          >
            <span>Back to Home</span>
            <MdOutlineArrowOutward className="text-lg md:text-xl font-extrabold" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center bg-white hover:bg-green-800/10 border border-green-800/30 text-green-800 gap-2 py-3 px-6 hover:-translate-y-0.5 transition-all duration-500 font-semibold rounded-full text-sm md:text-base"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-black/60 mt-4">
          <Link
            href="/#about"
            className="hover:text-green-800 transition-colors"
          >
            About
          </Link>
          <span className="text-black/30">•</span>
          <Link
            href="/#services"
            className="hover:text-green-800 transition-colors"
          >
            Services
          </Link>
          <span className="text-black/30">•</span>
          <Link href="/blog" className="hover:text-green-800 transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
