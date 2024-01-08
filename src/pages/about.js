import Head from "next/head";
import Image from "next/image";
import scenario_gif from "../assets/gifs/NameScreen.gif";
import profile_pic from "../assets/images/ProfilePic.jpg";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Ashay Aswale's portfolio website" />
      </Head>
      <main className="flex w-full flex-col justify-center">
        <Education/>
        <Experience/>
        <Skills/>
      </main>
    </>
  );
};

export default about;
