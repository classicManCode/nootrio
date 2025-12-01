import Link from "next/link";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    // if not "fixed" then add "absolute"
    <header className="flex justify-center items-center fixed w-full top-4 z-9999"> 
      <nav className="flex items-center justify-between w-[65%]">
        <Link href="/"><Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={100}
                      height={100}
                      className="w-20 h-20"
                    /></Link>
        <ul className="flex gap-8 items-center py-5 rounded-full px-10 bg-teal-800/40 backdrop-blur-[10px]">
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
        <div className="flex gap-4">
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
