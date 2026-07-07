import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import aboutImg from "../../assets/images/about.jpg";
import "./About.css";

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about__wrapper">
          <div className="about__image animate-on-scroll">
            <div
              className="about__img-inner"
              style={{ backgroundImage: `url(${aboutImg})` }}
            />
            <div className="about__badge">
              <span className="about__badge-number">15+</span>
              <span className="about__badge-text">Years of Excellence</span>
            </div>
          </div>
          <div className="about__content animate-on-scroll animate-delay-2">
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              We can help you at every stage of your life
            </h2>
            <p className="section-text">
              Alliance Asset Management is a Zimbabwean investment management
              firm dedicated to helping clients achieve long-term financial
              success. We combine market insight, disciplined investment
              strategies, and personalized financial guidance to create
              solutions that align with our clients' objectives.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">500+</span>
                <span className="about__stat-label">Clients Served</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">$50M+</span>
                <span className="about__stat-label">Assets Managed</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">98%</span>
                <span className="about__stat-label">Client Retention</span>
              </div>
            </div>
            <a href="#" className="btn btn-primary">
              More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
