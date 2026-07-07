import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faMoneyBillWave,
  faComments,
  faBriefcase,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./Offer.css";

const offerItems = [
  { icon: faBalanceScale, label: "Equities" },
  { icon: faMoneyBillWave, label: "Money Market" },
  { icon: faComments, label: "Advisory" },
  { icon: faBriefcase, label: "Investments" },
  { icon: faPhoneAlt, label: "Get In Touch" },
];

const Offer = () => {
  const ref = useScrollAnimation();

  return (
    <section className="offer" id="offer" ref={ref}>
      <div className="offer__wrapper animate-on-scroll">
        {/* Dark green heading card */}
        <div className="offer__heading-card">
          <h3 className="offer__heading">
            What can we offer
            <br />
            you today?
          </h3>
        </div>

        {/* Light green items */}
        <div className="offer__items">
          {offerItems.map(({ icon, label }, i) => (
            <div key={label} className={`offer__item offer__item--${i}`}>
              <div className="offer__icon">
                <FontAwesomeIcon icon={icon} />
              </div>
              <h4 className="offer__label">{label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
