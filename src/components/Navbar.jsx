import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";



const Navbar = () => {
    return(
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <motion.img 
                
                 initial={{ scale: 0 }}
                 animate={{ rotate: 360, scale: 1 }}
                 transition={{
                 type: "spring",
                 stiffness: 260,
                damping: 20
            }}

                className="mx-2 w-20" src={logo} alt="logo"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/navod-priyashan-161aa8211/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
    </a>
    <a href="https://github.com/NavodPriyashan" target="_blank" rel="noopener noreferrer">
        <FaGithub />
    </a>
    <a href="https://www.instagram.com/navod.priyashan/#" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
    </a>
    <a href="https://twitter.com/navod_priyashan" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
    </a>
</div>
        </nav>
    );
};

export default Navbar;
