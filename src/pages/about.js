import Head from "next/head";
import Image from "next/image";
import scenario_gif from "../assets/gifs/NameScreen.gif";
import profile_pic from "../assets/images/ProfilePic.jpg";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const about = () => {
  return (

    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Ashay Aswale's portfolio website" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-col w-full h-auto items-center self-center justify-center --font-mont">
          <AnimatedText text="About Me"/>
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
                    Master&apos;s research focused on the teleoperation of Boston
                    Dynamics&apos; Atlas robot via whole-body imitation. I am also a
                    maintainer for an open-source repository, Transportable
                    Opensource UI for Generic Humanoids (TOUGH). </p>
                    <p className="py-5 w-full items-center justify-center">I
                    was the team manager for my university&apos;s entry into NASA
                    Space Robotics Challenge Phase II, and we had made it to the
                    final round. I have also received the &apos;Best Paper Award&apos; at
                    AAMAS (2022), a conference with a 24% acceptance rate
                  </p>
                </center>
              </div>
              <div className="pr-5 col-span-1">
                <Image
                src={profile_pic}
              className="w-full h-auto"></Image>
                {/* <h>Hello</h> */}
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
              {/* <LinkArrow className={"w-6 ml-1"}></LinkArrow> */}
            </Link>
            <p>(Last updated on 07-01-2024)</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default about