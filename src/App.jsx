import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Places from "./component/Places";
import People from "./component/People";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Places" element={<Places />} />
          <Route path="People" element={<People />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
