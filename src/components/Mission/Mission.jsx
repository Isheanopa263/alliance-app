import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./Mission.css";

const Mission = () => {
  const ref = useScrollAnimation();

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="mission" ref={ref}>
      <div className="container">
        <div className="mission__content animate-on-scroll">
          <div className="mission__icon">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <h2 className="mission__text">
            We're an Asset Management firm that helps the world's most ambitious
            change makers define the future.
          </h2>
          <div className="mission__buttons">
            <a
              href="#about"
              className="btn btn-primary"
              onClick={(e) => handleClick(e, "#about")}
            >
              Discover More
            </a>
            <a
              href="#services"
              className="btn btn-outline-dark"
              onClick={(e) => handleClick(e, "#services")}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
