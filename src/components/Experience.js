import { Assistant } from 'next/font/google'
import {React, useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Company = ({company, companyLink}) => {
  const ref = useRef(null)
  return <li ref={ref} className='capitalize font-bold text-2xl mx-4 w-full flex flex-col items-start justify-between ml-4'>
  <LiIcon reference={ref}/>
  <a href={companyLink} target='_blank' className='text-primary capitalize mt-0 w-[60%] mx-auto flex flex-col justify-between'>@{company}</a>
  </li>
}

const Details = ({position, time, dept, work}) => {
  return <li className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col'>
    <div>
      <h3 className='capitalize font-bold text-xl'>
        {position}
      </h3>
      <span className='capitalize font-medium text-dark/75 '>
        <p>
        {time}
        </p>
        {dept}
      </span>
      <p className='font-medium w-full '>
        {work}
      </p>
    </div>
  </li>
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className='my-16'>
      <h1 className=" justify-center text-center overflow-hidden text-6xl font-bold capitalize">Experience</h1>
      <div ref={ref} className='w-[75%] mx-auto relative my-8'>
        <motion.div  
        // style={{scaleY:scrollYProgress}}
        className='absolute left-9 top-2 w-[4px] h-[95%] bg-dark origin-top'>
        </motion.div>
        <Company company={"Worcester Polytechnic Institute"} companyLink={"https://www.wpi.edu/"}/>
        
        <ul className='w-full flex flex-col ml-4'>
          <Details position={"Research Assistant"} 
          time={"Aug 2021-Apr 2022 | Jan 2023-Current"} dept={"Robotics Department"}
          work={"Research assistant in the NEST lab working on the multi robot task allocation and scheduling"}
          />
        </ul>
        <ul className='w-full flex flex-col ml-4'>
          <Details position={"Team Manager"}
          time={"Jan 2020-Jul 2020 | Jan 2021-Jul 2021"} dept={"Robotics Department"}
          work={"Team Manager for Team Capricorn, WPI's entry for the competition 'NASA Space Robotics Challenge Phase II'. The team had qualified for the final round of the competition."}
          />
        </ul>
        <ul className='w-full flex flex-col ml-4'>
          <Details position={"Teaching Assistant"}
          time={"Aug 2019-Oct 2019 | Aug 2020-Dec2020 | Aug 2022-Dec2022"} dept={"Robotics Department"}
          work={"Teaching assistant for the courses Computer Vision, Robotics Foundations, Unified Robotics III,  and IV"}
          />
        </ul>
        {/* <ul className='w-full flex flex-col ml-4'>
          <Details position={"Laboratory Assistant"}
          time={"May 2022-Aug 2022"} dept={"Robotics Department"}
          work={"Laboratory assistant for the robotics labs in WPI."}
          />
        </ul> */}
        {/* <ul className='w-full flex flex-col ml-4'>
          <Details position={"Research Assistant"} 
          time={"Aug 2021-Apr 2022"} dept={"Robotics Department"}
          work={"Research assistant in the NEST lab for the academic year 2021"}
          />
        </ul> */}
        {/* <ul className='w-full flex flex-col ml-4'>
          <Details position={"Teaching Assistant"}
          time={"Aug 2019-Oct 2019 | Aug 2020-Dec2020"} dept={"Robotics Department"}
          work={"Teaching assistant for the course Computer Vision"}
          />
        </ul> */}
        {/* <ul className='w-full flex flex-col ml-4'>
          <Details position={"Teaching Assistant"}
          time={"Aug 2019-Oct 2019"} dept={"Robotics Department"}
          work={"Teaching assistant for the course Computer Vision"}
          />
        </ul> */}
        <ul className='w-full flex flex-col ml-4'>
          <Details position={"Laboratory Assistant"}
          time={"Sep 2018-Apr 2019 | May 2022-Aug 2022"} dept={"Robotics Department"}
          work={"Lab assistant for the Robotics Labs. Responsible for improving the software structure and  entrusted with robots' maintenance and repair. Design and manufacture various parts or test rigs needed for lab projects. Responsible to manage the inventory of the lab"}
          />
        </ul>
        <Company company={"ORACLE FINANCIAL SERVICES SOFTWARE LIMITED (OFSS)"} companyLink={"https://www.oracle.com/financial-services/"}/>
        <ul className='w-full flex flex-col ml-4'>
          <Details position={"Associate Consultant"} 
          time={"Jul 2017-Jul 2018"} dept={""}
          work={"Developed tailored banking solutions for diverse clients. Handled operations for existing clients"}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience