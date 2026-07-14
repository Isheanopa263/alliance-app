import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import allianceLogo from "../../assets/images/alliance-logo.png"; // Add this import
import "./Header.css";

const navItems = [
  { label: "The Firm", href: "#hero" },
  { label: "What We Do", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Advisory", href: "#philosophy" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.pageYOffset > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Handle logo click - navigate home and scroll to top
  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname === "/") {
      // Already on home, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home
      navigate("/");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const targetId = location.hash.replace("#", "");
        const target = document.getElementById(targetId);
        if (target) {
          const offset = 80;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__container">
          <div className="header__logo">
            <Link to="/" onClick={handleLogoClick}>
              <img src={allianceLogo} alt="Alliance Asset Management" />
            </Link>
          </div>

          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="header__nav-link"
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn btn-primary header__cta"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get Started
            </a>
            <button
              className={`header__hamburger ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-overlay ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <nav className={`mobile-nav ${mobileOpen ? "active" : ""}`}>
        <button
          className="mobile-nav__close"
          onClick={() => setMobileOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="mobile-nav__list">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="mobile-nav__link"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mobile-nav__cta-item">
            <a
              href="#contact"
              className="btn btn-primary mobile-nav__cta"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
