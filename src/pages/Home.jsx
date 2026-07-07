import React from "react";
import Hero from "../components/Hero/Hero";
import Offer from "../components/Offer/Offer";
import Mission from "../components/Mission/Mission";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import ZimEconomy from "../components/ZimEconomy/ZimEconomy";
import Philosophy from "../components/Philosophy/Philosophy";
import WhyUs from "../components/WhyUs/WhyUs";
import Stats from "../components/Stats/Stats";
import Insights from "../components/Insights/Insights";
import CTA from "../components/CTA/CTA";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Offer />
      <Mission />
      <About />
      <Services />
      <ZimEconomy />
      <Philosophy />
      <WhyUs />
      <Stats />
      <Insights />
      <CTA />
    </div>
  );
};

export default Home;
