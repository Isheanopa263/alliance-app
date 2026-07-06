import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./Services.css";

const services = [
  { title: "Equities", size: "large" },
  { title: "Money Market", size: "small" },
  { title: "Advisory", size: "small" },
  { title: "Investments", size: "small" },
];

const ServiceCard = ({ title, size, delay }) => (
  <div
    className={`service-card service-card--${size} animate-on-scroll animate-delay-${delay}`}
  >
    <div className="service-card__top">
      <img
        src="https://zwhost.co.zw/projects/alliance/wp-content/uploads/2026/05/alliance-logo-icon.png"
        alt="Alliance Icon"
      />
    </div>
    <div className="service-card__bottom">
      <span>{title}</span>
      <FontAwesomeIcon icon={faArrowRight} className="service-card__arrow" />
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
          {/* Large card */}
          <ServiceCard title="Equities" size="large" delay={1} />

          {/* Small cards */}
          <div className="services__small-grid">
            <ServiceCard title="Money Market" size="small" delay={2} />
            <ServiceCard title="Advisory" size="small" delay={3} />
            <ServiceCard title="Investments" size="small" delay={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
