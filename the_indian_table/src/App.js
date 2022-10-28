import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Home from "./pages/Home/Home";
import Menus from "./pages/Menus";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menus" element={<Menus />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
