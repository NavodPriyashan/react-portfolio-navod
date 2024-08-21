import { FaNodeJs, FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiJavascript1, DiPhp, DiHtml5, DiCss3, DiPython } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
             whileInView={{opacity: 1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 1.5}}

            
            className="my-20 text-center text-4xl">Technologies</motion.h1>

            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1.5}}

            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" /> {/* React (Cyan) */}
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl text-white" /> {/* Next.js (white) */}
                </motion.div>

                <motion.div 
                variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" /> {/* MongoDB (Green) */}
                </motion.div>

                <motion.div
                variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" /> {/* Node.js (Green) */}
                </motion.div>

                <motion.div
                variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-500" /> {/* PostgreSQL (Blue) */}
                </motion.div>

                <motion.div 
                variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-600" /> {/* Java (Red) */}
                </motion.div>

                <motion.div
                variants={iconVariants(5.5)}
                    initial="initial"
                    animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript1 className="text-7xl text-yellow-400" /> {/* JavaScript (Yellow) */}
                </motion.div>

                <motion.div 
                variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPhp className="text-7xl text-purple-500" /> {/* PHP (Purple) */}
                </motion.div>

                <motion.div 
                variants={iconVariants(6.5)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiHtml5 className="text-7xl text-orange-500" /> {/* HTML5 (Orange) */}
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiCss3 className="text-7xl text-blue-400" /> {/* CSS3 (Blue) */}
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className="text-7xl text-blue-400" /> {/* Python (Blue) */}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
