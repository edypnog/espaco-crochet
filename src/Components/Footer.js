import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsInstagram  style={{color:'#A083BE'}}/>
          <FaFacebookF style={{color:'#A083BE'}} />
          <BsWhatsapp style={{color:'#A083BE'}} />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhar</span>
          <span>Feedback</span>
          <span>Nossos Trabalhos</span>
        </div>
        <div className="footer-section-columns">
          <span style={{color:'#A083BE'}}>244-5333-7783</span>
          <span style={{color:'#A083BE'}}>espacocrochet@ec.com</span>
          <span style={{color:'#A083BE'}}>contact@ec.com</span>
        </div>
        <div className="footer-section-columns">
          <span>&copy;</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
