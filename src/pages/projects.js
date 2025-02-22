import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import test_image from "../assets/images/ProfilePic.jpg";
import Image from "next/image";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark roudned-br-2xl rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const NormalProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark roudned-br-2xl rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
              <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rj95Xd9sNUo?si=Ni-aRHgEJkY1tM4M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="px-6 text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Ashay Aswale's portfolio website : Projects"
        />
      </Head>
      <main className="flex w-full flex-col justify-center mb-16 items-center">
        <Layout className="pt-16">
          <AnimatedText text={"Projects"} className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Project 1"
                summary={"Description"}
                link="/"
                type="Featured projcet"
                img={test_image}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <NormalProject
                title="Project 1"
                summary={"Description"}
                link="/"
                type="Featured projcet"
                img={test_image}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <NormalProject
                title="Project 1"
                summary={"Description"}
                link="/"
                type="Featured projcet"
                img={test_image}
                github={"/"}
              />
            </div>
            <div className="col-span-12">FeaturedProject</div>
            <div className="col-span-6">
              <NormalProject
                title="Project 1"
                summary={"Description"}
                link="/"
                type="Featured projcet"
                img={test_image}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <NormalProject
                title="Project 1"
                summary={"Description"}
                link="/"
                type="Featured projcet"
                img={test_image}
                github={"/"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
