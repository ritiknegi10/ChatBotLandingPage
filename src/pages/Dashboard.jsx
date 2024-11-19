import React, { useEffect } from "react";
import Hero from "./Hero";
import Main from "./Main";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Video from "./Video";
import Pricing from "./Pricing";
import Footer from "./Footer";

import { FlipWordsDemo } from "./FlipWordsDemo";
import Headbar from "./Headbar";
import Benefits from "./Benefits";
import Work from "./Work";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import { FinalMessage } from "./FinalMessage";

const Dashboard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div>
      {/* <Headbar /> */}
      <Headbar />

      <div className="bg-primary sm:px-5 " data-aos="fade-up">
        {/* <TracingBeamDemo> */}
        <FlipWordsDemo />
        {/* <Hero /> */}

        {/* <AboutUs /> */}
        <Main />

        <Features />
        <Work />
        {/* <InfiniteMo vingCardsDemo /> */}
        <Benefits />
        <Video />
        <Reviews />
        <Pricing />
        <FAQ />
        <FinalMessage />
        {/* <BackgroundGradientDemo /> */}
        {/* <ContactUs /> */}
        {/* <Video /> */}
        {/* <Pricing /> */}

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
