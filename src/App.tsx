/* eslint-disable no-unused-expressions */
import React from "react";
import "./styles/global.css";
import "aos/dist/aos.css";
import { ContactProvider } from "./contexts/ContactProvider";
import Home from "./components/Home";
import WhoAmI from "./components/WhoAmI";
import Knowledge from "./components/Knowledge";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ContactProvider>
      <Home />
      <WhoAmI />
      <Knowledge />
      <Contact />
      <Footer />
    </ContactProvider>
  );
}

export default App;
