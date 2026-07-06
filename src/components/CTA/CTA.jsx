import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./CTA.css";

const CTA = () => {
  const ref = useScrollAnimation();

  return (
    <section className="cta" id="contact" ref={ref}>
      <div className="container">
        <div className="cta__wrapper">
          <div className="cta__content animate-on-scroll">
            <span className="section-label">Let's Talk</span>
            <h2 className="section-title cta__title">
              Partner with us and take the next step toward sustainable wealth
              creation and financial success.
            </h2>
            <p className="section-text cta__text">
              Whether you are an individual investor, a growing business, or an
              institutional client, Alliance Asset Management is ready to help
              you achieve your financial objectives.
            </p>
            <div className="cta__buttons">
              <a href="#" className="btn btn-primary">
                Find Advisor
              </a>
              <a
                href="mailto:admin@allianceassetmgt.com"
                className="btn btn-outline"
              >
                Email Us
              </a>
            </div>
          </div>
          <div className="cta__image animate-on-scroll animate-delay-2">
            <div className="cta__img-inner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
