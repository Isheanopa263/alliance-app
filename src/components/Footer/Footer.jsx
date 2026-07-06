import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const services = ["Equities", "Money Market", "Advisory", "Investments"];

const socialLinks = [
  { icon: faLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: faFacebookF, label: "Facebook", href: "#" },
  { icon: faTwitter, label: "Twitter", href: "#" },
  { icon: faInstagram, label: "Instagram", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
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
              <img
                src="https://zwhost.co.zw/projects/alliance/wp-content/uploads/2023/04/alliance-logo-1024x670.png"
                alt="Alliance Asset Management"
              />
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

            {/* Services */}
            <div className="footer__col">
              <h3 className="footer__col-title">Services</h3>
              <div className="footer__divider" />
              <ul className="footer__links">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faSquare}
                        className="footer__link-icon"
                      />
                      {service}
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

            {/* Social */}
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
