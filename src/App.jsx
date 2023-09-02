import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Places from "./component/Places";
import People from "./component/People";
import Footer from "./component/Footer";
import Errormessage from "./component/Errormessage";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Places" element={<Places />} />
          <Route path="People" element={<People />} />
          <Route path="*" element={<Errormessage />} />
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
