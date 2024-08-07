import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Faiz Tahir
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portdolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/faiz-tahir-7b9396247"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/faiz.wayne.92" target="_blank">
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/whathefaiz?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/WhaTheFaiz?t=jRoNOvYh0ydqKeIsfbRE-A&s=09"
          target="_blank"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Faiz Wayne. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
