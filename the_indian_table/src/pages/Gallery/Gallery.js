import React, { useEffect } from "react";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import food10 from "../../assets/gallery/food10.jpg";
import food2 from "../../assets/gallery/food2.jpg";
import food3 from "../../assets/gallery/food3.jpg";
import food4 from "../../assets/gallery/food4.png";

import place1 from "../../assets/gallery/place1.jpg";
import place2 from "../../assets/gallery/place2.jpg";
import place3 from "../../assets/gallery/place3.png";
import place4 from "../../assets/gallery/place4.png";
import place5 from "../../assets/gallery/place5.png";

function Galllery() {
  const smoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };
  useEffect(() => {
    smoothScrolling();
  });
  smoothScrolling();
  const activateModal = () => {
    const toggle = document.getElementById("modal");
    toggle.classList.toggle("hidden");
  };
  return (
    <div>
      <Banner pic={food10} link="#gallery" />
      <div id="gallery" className="bg-white">
        <h1
          style={{ textShadow: "0px 2px 1px black" }}
          className="text-center text-4xl font-bold"
        >
          Enjoy the Feel
        </h1>
        <div className="grid md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-4">
          <Card pic={place1} />
          <Card pic={place2} />
          <Card pic={place5} />
          <Card pic={place4} />
          <Card pic={place3} />
          <Card pic={food2} />
          <Card pic={food3} />
          <Card pic={food4} />
        </div>
      </div>
      <div
        id="modal"
        style={{
          width: "100%",
          height: "1000%",
        }}
        className="hidden absolute top-0 left-0 bg-black"
      >
        <div
          style={{ animation: "show 0.7s ease-in-out" }}
          className="text-white"
        >
          <div className="">life</div>
        </div>
      </div>
    </div>
  );
}

export default Galllery;
