import Head from "next/head";
import Image from "next/image";
import scenario_gif from "../assets/gifs/NameScreen.gif";
import profile_pic from "../assets/images/ProfilePic.jpg";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashay Aswale</title>
        <meta name="description" content="Ashay Aswale's portfolio website" />
      </Head>
      <main className="flex-col items-center bg-light text-dark min-w-screen min-h-screen">
        <div className="flex w-full h-auto">
          <Image
            src={scenario_gif}
            alt="task allocation gif"
            className="w-full h-auto"
          />
        </div>        
        <Layout>
          <h1 className=" justify-center text-center overflow-hidden text-6xl font-bold capitalize">BIO</h1>
           <div className="flex flex-col w-full h-full items-center self-center justify-center --font-mont">
            <div className="grid w-full grid-cols-4 gap-16">
              <div className="col-span-3 flex flex-col items-start justify-start">
                <center>
                  <p className="py-5 w-full items-center justify-center">
                    I am a Ph.D. candidate in Robotics department at Worcester
                    Polytechnic Institute, working with Professor Carlo
                    Pinciroli. My current research focuses on Multi-Robot Task
                    Allocation for Heterogeneous Robots with Specific Skills.{" "}
                  </p>
                  <p className="py-5 w-full items-center justify-center">
                    I also have research experience in Humanoid robotics, and my
                    Master&apos;s research focused on the teleoperation of
                    Boston Dynamics&apos; Atlas robot via whole-body imitation.
                    I am also a maintainer for an open-source repository,
                    Transportable Opensource UI for Generic Humanoids (TOUGH).{" "}
                  </p>
                  <p className="py-5 w-full items-center justify-center">
                    I was the team manager for my university&apos;s entry into
                    NASA Space Robotics Challenge Phase II, and we had made it
                    to the final round. I have also received the &apos;Best
                    Paper Award&apos; at AAMAS (2022), a conference with a 24%
                    acceptance rate
                  </p>
                </center>
              </div>
              <div className="col-span-1 relative h-max rounded-2xl border-solid border-dark bg-light p-1">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                <Image src={profile_pic} alt="Ashay Aswale picture" className="w-full h-auto rounded-2xl"></Image>
              </div>
            </div>
            <div className="flex-col items-center justify-center mt-2">
              <Link
                href="/AshayResume.pdf"
                target={"_blank"}
                className="flex items-center justify-center bg-dark text-light p-2.5 px-6 rounded-lg 
              text-lg font-semibold hover:bg-light hover:text-dark border border-solid 
              border-transparent hover:border-dark border-2"
              >
                Resume
              </Link>
              <p>(Last updated on 07-01-2024)</p>
            </div>
          </div>
            <div className="grid w-full grid-cols-4 gap-16 pt-20">
              <div className="">
                
              <Link
                href="/about"
                className="flex items-center justify-center bg-light text-dark p-2.5 px-6 rounded-lg 
              text-lg font-semibold hover:bg-dark hover:text-light border border-solid 
              border-2 border-dark border-2"
              >
                More About Me
              </Link>
              </div>
              <div className="">
                
              <Link
                href="/projects"
                className="flex items-center justify-center bg-light text-dark p-2.5 px-6 rounded-lg 
              text-lg font-semibold hover:bg-dark hover:text-light border border-solid 
              border-2 border-dark border-2"
              >
                Projects
              </Link>
              </div>
              <div className="">
                
              <Link
                href="/publications"
                className="flex items-center justify-center bg-light text-dark p-2.5 px-6 rounded-lg 
              text-lg font-semibold hover:bg-dark hover:text-light border border-solid 
              border-2 border-dark border-2"
              >
                Research Work
              </Link>
              </div>
              <div className="">
                
              <Link
                href="mailto:asaswale@wpi.edu"
                className="flex items-center justify-center bg-light text-dark p-2.5 px-6 rounded-lg 
              text-lg font-semibold hover:bg-dark hover:text-light border border-solid 
              border-2 border-dark border-2"
              >
                Contact Me
              </Link>
              </div>
            </div>
        </Layout>
      </main>
    </>
  );
}
