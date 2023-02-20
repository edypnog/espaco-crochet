import React from "react";
import Pick from "../Assets/pick-meals-image.png";
import Choose from "../Assets/choose-image.png";
import Delivery from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Pick,
      title: "Redes Sociais",
      text: "Um formulário é enviado para o cliente especificar seus gostos e assim podermos iniciar a produção",
    },
    {
      image: Choose,
      title: "Fios de Qualidade",
      text: "Selecionados com cuidado para que sua peça fique ainda mais atrativa",
    },
    {
      image: Delivery,
      title: "Entregas Rápidas",
      text: "FRETE EXPRESSO para que tenha o seu produto ainda mais rápido em mãos",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trabalhos</p>
        <h1 className="primary-heading">Como fazer o pedido?</h1>
        <p className="primary-text">
        Nossos produtos são realizados com calma para que 
você receba a melhor qualidade, portanto, o pedido
deve ser feito com antecedência para que a encomenda chegue até você no prazo desejado.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
