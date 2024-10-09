import { useRef } from "react";
import "./aboutme.scss";
import {motion,useInView} from "framer-motion";

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

const Aboutme = () => {

  const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="aboutme" 
    variants={variants} 
    initial="initial" 
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    >
       <div className="wrapper">
        <motion.div className="titleContainer" variants={variants} >
               <motion.h1 whileHover={{color:"orange"}}><b>About Me</b></motion.h1> 
               <p>Hi, I'm Akshay Kumar K, an MCA graduate driven by a love logo for Software Development. 
                I focus on building robust applications and crafting user-friendly interfaces, continuously 
                learning and applying new technologies. Currently, I am focused on mastering NextJS to enhance 
                my React skills and exploring Framer-Motion to create visually stunning web applications.
                Currently looking for a full time job in front-end or full-stack development, I am motivated by the 
                opportunity to put my skills into practice within a dynamic team. If my profile interests you, I would 
                be happy to talk with you to discuss opportunities.</p>
                <button>Resume</button>
        </motion.div>
        <motion.div className="skillContainer" variants={variants} >
            <motion.h1 whileHover={{color:"orange"}}><b>What I Know ?</b></motion.h1>
            <img src="html1.svg" alt="html logo" />
            <img src="css1.svg" alt="css logo" />
            <img src="bootstrap.svg" alt="bootstrap logo" />
            <img src="js.svg" alt="js logo" />
            <img src="java-icon.svg" alt="java logo" />
            <img src="Spring_Boot.svg" alt="spring logo" />
            <img src="mysql.svg" alt="sql logo" />
            <img src="postgresql.svg" alt="postgresql logo" />
            <img src="react.svg" alt="react logo" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Aboutme