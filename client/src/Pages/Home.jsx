import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Video from "../components/Video";
import Features from "../components/Features";
import BentoLunchBoxSection from "../components/BentoLunchBoxSection";
import StickyCTA from "../components/CTA";
import FAQs from "../components/FAQs";
import Guarantee from "../components/Guarantee";
import LimitedTimeOffer from "../components/LimitedTimeOffer";
import ComparisonSection from "../components/ComparisonTable";
import Benefits from "../components/Benefits";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <StickyCTA />
      <Product />
      <Features />
      <BentoLunchBoxSection />
      {/* <Video />
      <Services /> */}
      <Benefits />
      <Testimonial />
      {/* <Contact />
      <About /> */}
      <ComparisonSection />
      <LimitedTimeOffer endDate="2025-05-05T00:00:00" />
      <Guarantee />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
