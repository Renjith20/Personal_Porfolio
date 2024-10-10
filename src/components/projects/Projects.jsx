import { useRef } from "react";
import "./projects.scss";
import {motion , useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
    id:1,
    title:"MedStore ",
    img:"https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc:" Introducing a medical store management application using java, spring, mysql. Empowering users with seamless Signup/Login functionality , medicine management and powerful search capacities.Once you logged in ,users have the ability to manage their medicines to update , delete view or even to search.",
},
{
    id:2,
    title:"Chargify",
    img:"https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc:"An Android Application coded in Java Language using Android Studio. Backend is implemented using Firebase. CHARGIFY app helps you locate the charging stations and reserve the charger slot for the user vehicle.",
},
{
    id:3,
    title:"Dicee Game",
    img:"https://images.pexels.com/photos/33968/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    desc:"Dicee - Game is a simple JavaScript game . It is mainly build using HTML , CSS and JavaScript. when you refresh the webpage the dice will automatically rotate , after that two dice shows the value . The player having the highest value will won that match . Refresh the page again and restart the match.",
},
{
    id:4,
    title:"weather App",
    img:"https://img.freepik.com/free-photo/3d-render-weather-app-icons-interface-elements_107791-17422.jpg",
    desc:"Using weather api to integrate this JavaScript based application. HTML and CSS for the Frontend. This weather App indicates current temperature,wind speed and humidity.",
},
{
    id:5,
    title:"ImaginAI - AI Image Generation",
    img:"https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg",
    desc:"AI image generator is a Full Stack MERN app where Front End is React & Express and Back End is Mongodb. OpenAI service is used for generating the AI images. OpenAI is a research laboratory that focuses on artificial intelligence (AI) .In this web app, images are generated based on the content written by the user.",
},
];

const Single = ({item}) =>{

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ["start start", "end start"]
    });

     const y = useTransform(scrollYProgress,[0,1],[-300, 300]);

    return(
        <section id="Projects">
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>Github</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
};

const Projects = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["end end" , "start start"],
    });

    const scaleX = useSpring(scrollYProgress,
    {
        stiffness:100,
        damping:30,
    });



  return (
    <div className="projects" ref={ref}>
        <div className="progress">
            <motion.h1 whileHover={{color:"orange"}}>Latest Projects</motion.h1>
            <motion.div style={{scaleX}} className="progressBar">
            </motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>

  );
};

export default Projects