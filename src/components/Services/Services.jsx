import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useScrollAnimation from "../../hooks/useScrollAnimation";

// Import all images
import equitiesImg from "../../assets/images/services/equities.jpg";
import moneyMarketImg from "../../assets/images/services/money-market.jpg";
import advisoryImg from "../../assets/images/services/advisory.jpg";
import investmentsImg from "../../assets/images/services/investments.jpg";
import allianceIcon from "../../assets/images/alliance-icon.png";

import "./Services.css";

const services = [
  { title: "Equities", image: equitiesImg, size: "large" },
  { title: "Money Market", image: moneyMarketImg, size: "small" },
  { title: "Advisory", image: advisoryImg, size: "small" },
  { title: "Investments", image: investmentsImg, size: "small" },
];

const ServiceCard = ({ title, image, size, delay }) => (
  <div
    className={`service-card service-card--${size} animate-on-scroll animate-delay-${delay}`}
  >
    <img src={image} alt={title} className="service-card__bg-img" />
    <div className="service-card__overlay" />
    <div className="service-card__content">
      <div className="service-card__logo">
        <img src={allianceIcon} alt="Alliance" />
      </div>
      <div className="service-card__footer">
        <span className="service-card__title">{title}</span>
        <FontAwesomeIcon icon={faArrowRight} className="service-card__arrow" />
      </div>
    </div>
  </div>
);

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services__header text-center animate-on-scroll">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Helping You To Optimize Your Financial Situation
          </h2>
        </div>

        <div className="services__grid">
          <ServiceCard {...services[0]} delay={1} />

          <div className="services__small-grid">
            <ServiceCard {...services[1]} delay={2} />
            <ServiceCard {...services[2]} delay={3} />
            <ServiceCard {...services[3]} delay={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
