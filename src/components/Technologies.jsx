import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RevealOnScroll } from "./RevealOnScroll";
import * as motion from "motion/react-client"

export const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <RevealOnScroll>
            <h1 className="my-20 text-center text-4xl text-white font-light">Technologies</h1>

            <div className="flex flex-wrap items-center justify-center gap-6">
                <motion.div whileHover={{scale:1.2}} whileTap={{scale: 0.8}} className=" rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-4xl text-sky-400" />
                </motion.div>
                <motion.div whileHover={{scale:1.2}} whileTap={{scale: 0.8}} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-4xl text-yellow-300" />
                </motion.div>
                <motion.div whileHover={{scale:1.2}} whileTap={{scale: 0.8}} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-4xl text-blue-500" />
                </motion.div>
                <motion.div whileHover={{scale:1.2}} whileTap={{scale: 0.8}} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiNodejs className="text-4xl text-green-500" />
                </motion.div>
                <motion.div whileHover={{scale:1.2}} whileTap={{scale: 0.8}} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-4xl text-emerald-400" />
                </motion.div>
            </div>
            </RevealOnScroll>
        </div>
    );
};
