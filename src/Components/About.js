import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre nós</p>
        <h1 className="primary-heading">
          Espaço Crochet
        </h1>
        <p className="primary-text">
          Somos uma pequena equipe com o objetivo de
          trazer a moda do artesanato de volta ao público.
          As peças  são feitas à mão, de acordo com o desejo
          do cliente, e entregues rapidamente.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
            Saiba Mais
          </button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Vídeos
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
