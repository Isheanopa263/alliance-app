import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroBg from "../../assets/images/hero.jpg";
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
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero__container">
        <div className="hero__card fade-up">
          <span className="hero__subtitle">
            Welcome to Alliance Asset Management
          </span>
          <h1 className="hero__title">
            We are Building Wealth Through Intelligent Investment Solutions
          </h1>
          <p className="hero__description">
            We help individuals, businesses, and institutions grow, preserve,
            and manage wealth through strategic investment solutions tailored to
            their financial goals.
          </p>
          <div className="hero__buttons">
            <a
              href="#about"
              className="btn btn-hero-primary"
              onClick={(e) => handleScrollClick(e, "#about")}
            >
              Discover More
              <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
            </a>
            <a
              href="#contact"
              className="btn btn-hero-secondary"
              onClick={(e) => handleScrollClick(e, "#contact")}
            >
              Find An Advisor
              <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
            </a>
          </div>
        </div>

        <a
          href="#offer"
          className="hero__scroll-down"
          onClick={(e) => handleScrollClick(e, "#offer")}
          aria-label="Scroll down"
        >
          <span>Scroll Down</span>
          <FontAwesomeIcon icon={faArrowDown} className="hero__scroll-icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
