import React from "react";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Modal = ({selectedimg,setSelectedimg})=>{
    const handleClick =(e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedimg(null);
        }
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial= {{opacity:0}}
        animate = {{opacity: 1}}
        >
            <motion.img src={selectedimg} alt="enlarged" 
            initial = {{y:"100vh"}}
            animate ={{y:0}}
            />
        </motion.div>
    )
}

export default Modal