import { Assistant } from 'next/font/google'
import {React, useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({degree, field, university, universityLink, time, address, gpa}) => {
  const ref = useRef(null)
  return <li className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col'>
  <div>
  <LiIcon reference={ref}/>
    <h3 className='capitalize font-bold text-2xl'>
      {degree} <span className='text-dark/70'> in {field}</span>
    </h3>
    <span>
    <a href={universityLink} target='_blank' className='text-primary font-bold capitalize mt-0 mx-auto flex'>@{university}
    <span className='text-dark font-normal'>&nbsp;|&nbsp;{address}</span></a>
    </span>
    <span className='capitalize font-medium'>
      GPA : {gpa}
    </span>
    <p className='capitalize font-medium'>
      {time}
    </p>
  </div>
</li>
}

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className='my-0'>
      <h1 className=" justify-center text-center overflow-hidden text-6xl font-bold capitalize">Education</h1>
      <div ref={ref} className='w-[75%] mx-auto relative my-8'>
        <motion.div
        // style={{scaleY:scrollYProgress}}
        className='absolute left-9 top-2 w-[4px] h-[95%] bg-dark origin-top'>
        </motion.div>
        <ul className='w-full flex flex-col ml-4 '>
          <Details degree={"Ph.D."} field={"Robotics Engineering"}
          university={"Worcester Polytechnic Institute"}
          universityLink={"https://www.wpi.edu/"}
          address={"MA, USA"}
          gpa={"3.93/4.0"}
          time={"2018-Current"}
          />
        </ul>
        <ul className='w-full flex flex-col ml-4'>
          <Details degree={"B.Tech."} field={"Mechanical Engineering"}
          university={"College of Engineering Pune"}
          universityLink={"https://www.coep.org.in/"}
          address={"MH, India"}
          gpa={"6.92/10.0"}
          time={"2013-2017"}
          />
        </ul>
      </div>
    </div>
  )
}

export default Education