import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faChartLine,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import whyUsImg from "../../assets/images/whyus.jpg";
import "./WhyUs.css";

const reasons = [
  {
    icon: faShieldAlt,
    title: "Risk Management",
    text: "We protect your portfolio with proven risk strategies.",
  },
  {
    icon: faChartLine,
    title: "Market Expertise",
    text: "Deep knowledge of local and global financial markets.",
  },
  {
    icon: faUsers,
    title: "Client-Focused",
    text: "Personalized solutions tailored to your unique goals.",
  },
  {
    icon: faStar,
    title: "Proven Track Record",
    text: "Consistent performance and long-term value delivery.",
  },
];

const WhyUs = () => {
  const ref = useScrollAnimation();

  return (
    <section className="why-us" ref={ref}>
      <div className="container">
        <div className="why-us__wrapper">
          <div className="why-us__image animate-on-scroll">
            <div
              className="why-us__img-inner"
              style={{ backgroundImage: `url(${whyUsImg})` }}
            />
          </div>
          <div className="why-us__content animate-on-scroll animate-delay-2">
            <span className="section-label">
              Why Work With Alliance Asset Management?
            </span>
            <h2 className="section-title">
              Helping You To Optimize Your Financial Situation
            </h2>
            <p className="section-text">
              At Alliance Asset Management, we are committed to helping our
              clients achieve their financial goals through expert investment
              management, personalized advice, and disciplined risk management.
            </p>
            <div className="why-us__reasons">
              {reasons.map(({ icon, title, text }) => (
                <div key={title} className="why-us__reason">
                  <div className="why-us__reason-icon">
                    <FontAwesomeIcon icon={icon} />
                  </div>
                  <div>
                    <h4 className="why-us__reason-title">{title}</h4>
                    <p className="why-us__reason-text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
