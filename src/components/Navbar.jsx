import logo from "../assets/hacker.png"
import { FaInstagram,FaLinkedin,FaFacebook,FaGithub  } from "react-icons/fa"
import * as motion from "motion/react-client"

export const Navbar = () => {
    return (
        <nav className="mb-10 flex items-center justify-between py-1">
            <div
             className="flex flex-shrink-0 px-40">
                <img src={logo} alt="logo" className="w-22 h-22 object-contain rounded-full bg-neutral-950"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl px-20">
                <motion.div whileHover={{scale:2.2}} whileTap={{scale: 0.8}}>
                    <FaFacebook />
                </motion.div>
                <motion.div whileHover={{scale:2.2}} whileTap={{scale: 0.8}}>
                    <FaGithub />
                </motion.div>
                <motion.div whileHover={{scale:2.2}} whileTap={{scale: 0.8}}>
                    <FaInstagram />
                </motion.div>
                <motion.div whileHover={{scale:2.2}} whileTap={{scale: 0.8}}>
                    <FaLinkedin />
                </motion.div>


            </div>

        </nav>
        
    )
    
}