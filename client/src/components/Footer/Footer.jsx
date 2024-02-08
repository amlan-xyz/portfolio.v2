import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer__links">
        <a href="https://www.linkedin.com/in/amlanxyz" className="footer__item">
          <FaLinkedin />
        </a>
        <a href="https://github.com/amlan-xyz" className="footer__item">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/amlan.xyz/" className="footer__item">
          <FaInstagram />
        </a>
      </div>
      <p>
        Built with <FaReact className="react__icon" /> by Amlan
      </p>
    </div>
  );
};
