import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faSquare,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import allianceLogo from "../../assets/images/alliance-logo.png";
import "./Footer.css";

// Quick links in page order
const quickLinks = [
  { label: "The Firm", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "What We Do", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Advisory", href: "#philosophy" },
  { label: "Contact Us", href: "#contact" },
];

// Services list
const servicesList = ["Equities", "Money Market", "Advisory", "Investments"];

const socialLinks = [
  { icon: faLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: faFacebookF, label: "Facebook", href: "#" },
  { icon: faTwitter, label: "Twitter", href: "#" },
  { icon: faInstagram, label: "Instagram", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      {/* Footer Top Banner */}
      <div className="footer__banner">
        <div className="container">
          <div className="footer__banner-inner">
            <div className="footer__logo">
              <img src={allianceLogo} alt="Alliance Asset Management" />
            </div>
            <div className="footer__banner-cta">
              <h2 className="footer__banner-title">
                Start Your Investment Journey Today
              </h2>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Find Advisor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__columns">
            {/* About */}
            <div className="footer__col">
              <h3 className="footer__col-title">About Us</h3>
              <div className="footer__divider" />
              <p className="footer__col-text">
                With deep market expertise and a commitment to delivering value,
                we provide professional asset management services designed to
                maximize returns while managing risk.
              </p>
            </div>

            {/* Quick Links - In Page Order */}
            <div className="footer__col">
              <h3 className="footer__col-title">Quick Links</h3>
              <div className="footer__divider" />
              <ul className="footer__links">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} onClick={(e) => handleNavClick(e, href)}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="footer__link-icon"
                      />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__col-title">Contact Us</h3>
              <div className="footer__divider" />
              <h4 className="footer__col-subtitle">HQ Enquiries</h4>
              <ul className="footer__contact">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>6 Albany Road, Old Alexandra Park, Harare</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:admin@allianceassetmgt.com">
                    admin@allianceassetmgt.com
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:08677186206">08677186206</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Our Services</h3>
              <div className="footer__divider" />
              <ul className="footer__links">
                {servicesList.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, "#services")}
                    >
                      <FontAwesomeIcon
                        icon={faSquare}
                        className="footer__link-icon footer__link-icon--small"
                      />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="footer__col">
              <h3 className="footer__col-title">Follow Us</h3>
              <div className="footer__divider" />
              <div className="footer__social">
                {socialLinks.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="footer__social-icon"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="container">
          <p>{currentYear} © Alliance Asset Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
