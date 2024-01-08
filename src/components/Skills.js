import {React, useRef} from "react";
import LiIcon from "./LiIcon";
import {motion, useScroll} from "framer-motion"

const SkillDetails = ({genre, skill_list}) => {
  const ref = useRef(null)
  return <li className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col'>
  <div>
  <LiIcon reference={ref}/>
    <h3 className='capitalize font-bold text-2xl text-primary'>
      {genre} 
    </h3>
      <span className='text-dark text-xl'> {skill_list}</span>
  </div>
</li>
}


const Skills = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="my-16">
      <h1 className="justify-center text-center overflow-hidden text-6xl font-bold capitalize">
        Skills
      </h1>
      <div className="w-[75%] mx-auto relative my-8">
      <motion.div
        style={{scaleY:scrollYProgress}}
        className='absolute left-9 top-2 w-[4px] h-[95%] bg-dark origin-top'>
        </motion.div>
        <SkillDetails genre={"Development Languages"} skill_list={"Cpp, Python, Java, Matlab"}/>
        <SkillDetails genre={"Development Tools"} skill_list={"ROS, Gurobi, Git, Docker"}/>
        <SkillDetails genre={"Web-development Languages"} skill_list={"HTML, JS"}/>
        <SkillDetails genre={"Web-development Tools"} skill_list={"React, NextJs"}/>
      </div>
    </div>
  );
};

export default Skills;
