import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, ScholarIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between
    fixed bg-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mr-4" />
        <CustomLink
          href="/publications"
          title="Publications"
          className="ml-4"
        />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/AshayAswale"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{scale:0.9}}
          className="w-6 mr-3"
        >
          <GithubIcon className={"h-7 w-7"} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ashayaswale/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{scale:0.9}}
          className="w-6 mx-3"
        >
          <LinkedInIcon className={"h-7 w-7"} />
        </motion.a>
        <motion.a
          href="https://scholar.google.com/citations?user=cl1XBjsAAAAJ&hl=en"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{scale:0.9}}
          className="w-6 ml-3"
        >
          <ScholarIcon className={"h-7 w-7"} />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
