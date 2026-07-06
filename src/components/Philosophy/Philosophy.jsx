import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./Philosophy.css";

const Philosophy = () => {
  const ref = useScrollAnimation();

  return (
    <section className="philosophy" id="philosophy" ref={ref}>
      <div className="container">
        <div className="philosophy__wrapper">
          <div className="philosophy__content animate-on-scroll">
            <span className="section-label">Our Investment Philosophy</span>
            <h2 className="section-title philosophy__title">
              We bring deep, functional expertise, but are known for our
              holistic perspective
            </h2>
            <p className="section-text philosophy__text">
              At Alliance Asset Management, we believe successful investing is
              built on research, discipline, diversification, and a long-term
              perspective.
            </p>
            <div className="philosophy__pillars">
              {[
                "Research Driven",
                "Disciplined Approach",
                "Diversification",
                "Long-Term Focus",
              ].map((pillar) => (
                <div key={pillar} className="philosophy__pillar">
                  <div className="philosophy__pillar-dot" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
            <a href="#" className="btn btn-primary">
              Discover More
            </a>
          </div>
          <div className="philosophy__image animate-on-scroll animate-delay-2">
            <div className="philosophy__img-inner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
