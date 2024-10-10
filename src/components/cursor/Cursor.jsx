import { useEffect, useState } from "react";
import "./cursor.scss";
import {motion} from "framer-motion";

const Cursor = () => {

    const [position,setPositon] = useState({x:0,y:0})

    useEffect(() =>{
        const mouseMove = (e)=>{
            setPositon({x:e.clientX,y:e.clientY});
        };

        window.addEventListener("mouseover", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    },[]);

  return (
    <motion.div className="cursor" 
    animate={{ x:position.x+3, y: position.y+3 }}>
    </motion.div>
  )
}

export default Cursor