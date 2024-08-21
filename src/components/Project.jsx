import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl text-neutral-200"
            >
                Projects
            </motion.h1>

            <div className="space-y-12">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap items-center justify-center lg:justify-start">
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-6 lg:mb-0"
                        >
                            <img 
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="rounded shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                        whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x:100}}
                            transition={{duration:1}}
                         className="w-full max-w-xl lg:w-3/4">
                            <h2 
                            
                            className="text-2xl font-semibold text-neutral-200 mb-2">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:underline"
                                >
                                    {project.title}
                                </a>
                            </h2>
                            <p className="text-neutral-400">{project.description}</p>
                          
                            <div className="mt-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-900"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
