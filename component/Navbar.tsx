"use client";
import Link from "next/link";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-center items-center fixed w-full top-4 z-9999 px-4">
      <nav className="flex items-center justify-between w-full md:w-[85%] lg:w-[75%] xl:w-[65%]">
        <Link href="/" className="z-50">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 lg:gap-8 items-center py-3 md:py-5 rounded-full px-4 md:px-6 lg:px-10 bg-teal-800/40 backdrop-blur-[10px] text-sm lg:text-base">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-teal-900/95 backdrop-blur-md flex flex-col items-center justify-center z-40">
            <ul className="flex flex-col gap-8 items-center text-white text-xl">
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex gap-6 mt-8 text-white text-2xl">
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
        )}

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex gap-4">
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
      </nav>
    </header>
  );
};

export default Navbar;
