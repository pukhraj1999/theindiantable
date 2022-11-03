import React, { useState, useEffect } from "react";
import sanityClient from "../../api";

import Banner from "./Components/Banner";
import Card from "./Components/Card";
import food14 from "../../assets/gallery/food14.jpg";
// import food2 from "../../assets/gallery/food2.jpg";
// import food3 from "../../assets/gallery/food3.jpg";
// import food4 from "../../assets/gallery/food4.png";

// import place1 from "../../assets/gallery/place1.jpg";
// import place2 from "../../assets/gallery/place2.jpg";
// import place3 from "../../assets/gallery/place3.png";
// import place4 from "../../assets/gallery/place4.png";
// import place5 from "../../assets/gallery/place5.png";

function Galllery() {
  const [pics, setPics] = useState(null);
  const fetchPics = () => {
    sanityClient
      .fetch(
        `
      *[_type=="gallery"]{
          pic{
            asset->{
              _id,
              url
            },
          }
      }
    `
      )
      .then((res) => {
        setPics(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchPics();
  }, []);
  // Smooth Function
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
  return (
    <div>
      <Banner pic={food14} link="#gallery" />
      <div id="gallery" className="bg-white">
        <h1 className="text-center text-4xl font-bold py-6">Enjoy the Feel</h1>
        <div className="grid md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-4">
          {pics &&
            pics.map((e, key) => {
              return <Card key={key} pic={e.pic.asset.url} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Galllery;
