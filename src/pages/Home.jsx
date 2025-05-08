import React from "react";
import { HeroSection } from "../components/ui/Herosection";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
