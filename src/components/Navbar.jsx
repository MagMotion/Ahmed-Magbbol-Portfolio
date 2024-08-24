
import magboolLogo from "../assets/MagboolLogo.png";
import { FaLinkedin } from "react-icons/fa"; 
import { FaVimeo } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"; 
import { FaInstagramSquare } from "react-icons/fa"; 
import { PiLinktreeLogoFill } from "react-icons/pi";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center magboolLogo">
            <img className="w-8" src={magboolLogo} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/ahmadmagbool/" target="_blank"><FaLinkedin/></a>
            <a href="https://www.behance.net/AhmadMagbool" target="_blank"><FaBehanceSquare/></a>
            <a href="https://www.youtube.com/watch?v=5dfdasxp_T4" target="_blank"><FaSquareYoutube/></a>
            <a href="https://vimeo.com/magbool" target="_blank"><FaVimeo/></a>
            <a href="https://x.com/Ahmad_Magbool" target="_blank"><FaSquareXTwitter/></a>
            <a href="https://www.instagram.com/ahmad_magbool/" ><FaInstagramSquare/></a>
            <a href="https://linktr.ee/magbool" target="_blank"><PiLinktreeLogoFill/></a>
        </div>
    </nav>
  )
}

export default Navbar