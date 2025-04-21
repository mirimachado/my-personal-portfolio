import React from "react";

import Home from "./pages/Home";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FeedBackSpace from "./components/FeedbackSpace";
import Values from "./components/Values";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
    <Home />
    <Hero />
    <Services />
    <HowItWorks />
    <FeedBackSpace />
    <Values />
    <CallToAction />
    <Footer />
  </div>
  );
}

export default App;
