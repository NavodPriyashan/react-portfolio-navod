import {motion} from "framer-motion";

const SkillsEducationCertifications = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
             whileInView = {{opacity: 1, y: 0}}
             initial={{opacity:0, y:-100}}
             transition={{duration: 0.5}}
            
            className="my-20 text-center text-4xl">Skills, Education & Certifications</motion.h1>

            {/* Skills Section */}
            <div className="mb-16">
                <motion.h2 
             whileInView = {{opacity: 1, x: 0}}
             initial={{opacity:0, x:-100}}
             transition={{duration: 1}}
                
                className="text-3xl font-semibold mb-8 text-neutral-50">Skills</motion.h2>
                <ul
             
                 className="list-disc list-inside space-y-4 text-neutral-400">
                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 2}} 
                    >
                        <span className="font-semibold text-neutral-300">Programming Languages: </span> 
                         Python, Java, JavaScript, HTML/CSS, PHP
                    </motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 2.5}}
                    >
                        <span className="font-semibold text-neutral-300">Frameworks: </span> 
                         React Native
                    </motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 3}}
                    >
                        <span className="font-semibold text-neutral-300">Databases: </span> 
                         MySQL, MongoDB
                    </motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 3.5}}
                    >
                        <span className="font-semibold text-neutral-300">Tools: </span> 
                         Git, WordPress
                    </motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 4}}
                    >
                        <span className="font-semibold text-neutral-300">Networking: </span> 
                         Installed, configured, and maintained Cisco routers, switches, and other network devices
                    </motion.li>
                </ul>
            </div>

            {/* Education Section */}
            <div className="mb-16">
                <motion.h2 
                whileInView = {{opacity: 1, x: 0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 1}}
                
                className="text-3xl font-semibold mb-8 text-neutral-200">Education</motion.h2>
                <div className="space-y-8">

                    <motion.div
                    whileInView = {{opacity: 1, y: 0}}
                    initial={{opacity:0, y:-100}}
                    transition={{duration: 1.5}}
                     className="bg-black shadow-lg p-6 rounded-lg border border-neutral-300">
                        <h3 className="text-2xl font-semibold text-neutral-200">2023 - ICT Diploma NVQ 5</h3>
                        <p className="text-neutral-400">VTA Talbot-Town Galle</p>
                    </motion.div>

                    <motion.div 
                    whileInView = {{opacity: 1, y: 0}}
                    initial={{opacity:0, y:-100}}
                    transition={{duration: 2}}
                    className="bg-black shadow-lg p-6 rounded-lg border border-neutral-300">
                        <h3 className="text-2xl font-semibold text-neutral-200">2021 - Cisco CCNA Networking NVQ4</h3>
                        <p className="text-neutral-400">VTA Talbot-Town Galle</p>
                    </motion.div>

                    <motion.div 
                    whileInView = {{opacity: 1, y: 0}}
                    initial={{opacity:0, y:-100}}
                    transition={{duration: 2.5}}
                    className="bg-black shadow-lg p-6 rounded-lg border border-neutral-300">
                        <h3 className="text-2xl font-semibold text-neutral-200">2020 - Advanced Level</h3>
                        <p className="text-neutral-400">G/Ginthota M.V.</p>
                        <p className="text-neutral-500 italic">Subjects: Physics, Chemistry, Biology</p>
                    </motion.div>

                    <motion.div
                    whileInView = {{opacity: 1, y: 0}}
                    initial={{opacity:0, y:-100}}
                    transition={{duration: 3}}
                     className="bg-black shadow-lg p-6 rounded-lg border border-neutral-300">
                        <h3 className="text-2xl font-semibold text-neutral-200">2017 - Ordinary Level</h3>
                        <p className="text-neutral-400">G/Ginthota M.V.</p>
                        <p className="text-neutral-500">
                            Subjects: Buddhism (A), Sinhala (B), English (C), Math (B), History (A), ICT (A), 
                            Science (B), Drama (S), Civic Education (B)
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Certifications Section */}
            <div>
                <motion.h2 
                whileInView = {{opacity: 1, x: 0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 1}}
                
                className="text-3xl font-semibold mb-8 text-neutral-200">Certifications</motion.h2>
                <ul className="list-disc list-inside space-y-4 text-neutral-400">
                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 1.5}}
                    >Information & Communication Technology Diploma NVQ 5</motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 2}}
                    >Computer Network Technician NVQ 4</motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 2.5}}
                    >Cisco CCNA - Introduction to Networks</motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 3}}
                    >Cisco CCNA - Switching, Routing, and Wireless Essentials</motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                     initial={{opacity:0, x:-100}}
                     transition={{duration: 3.5}}
                    >Cisco CCNA - Enterprise Networking, Security, and Automation</motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 4}}
                    >Cisco Introduction to Cybersecurity</motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                     transition={{duration: 4.5}}
                    >Cisco Introduction to IoT</motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:5}}
                    >Future Careers Bridge Fundamental Level</motion.li>

                    <motion.li
                    whileInView = {{opacity: 1, x: 0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 5.5}}
                    >Future Careers Bridge Customer Service</motion.li>
                </ul>
            </div>
        </div>
    );
};

export default SkillsEducationCertifications;
