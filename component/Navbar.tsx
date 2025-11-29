import Link from "next/link";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    // if not "fixed" then add "absolute"
    <header className="flex justify-center items-center fixed w-full top-4 z-50"> 
      <nav className="flex items-center justify-between w-[65%]">
        <Link href="/">LOGO</Link>
        <ul className="flex gap-8 items-center py-5 rounded-full px-10 bg-teal-800/40 backdrop-blur-[10px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
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
