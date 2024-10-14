import "./skills.scss"
import {motion} from "framer-motion";
import { useRef } from "react";

const variants = {
    initial:{
      x:-500,
      y:100,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
const Skills = () => {
    const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"})
  return (
    <div className="skills"
    variants={variants} 
    initial="initial" 
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}>
       
    </div>
  )
}

export default Skills