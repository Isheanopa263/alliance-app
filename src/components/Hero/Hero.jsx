import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" />
      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__subtitle fade-up">
            Welcome to Alliance Asset Management
          </span>
          <h1 className="hero__title fade-up fade-up--delay-1">
            We are Building Wealth Through Intelligent Investment Solutions
          </h1>
          <p className="hero__description fade-up fade-up--delay-2">
            We help individuals, businesses, and institutions grow, preserve,
            and manage wealth through strategic investment solutions tailored to
            their financial goals.
          </p>
          <div className="hero__buttons fade-up fade-up--delay-3">
            <a
              href="#about"
              className="btn btn-primary"
              onClick={(e) => handleScrollClick(e, "#about")}
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => handleScrollClick(e, "#contact")}
            >
              Find An Advisor
            </a>
          </div>
        </div>

        <a
          href="#offer"
          className="hero__scroll-down"
          onClick={(e) => handleScrollClick(e, "#offer")}
          aria-label="Scroll down"
        >
          <FontAwesomeIcon icon={faChevronDown} className="hero__scroll-icon" />
          <span>Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
