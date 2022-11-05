import React, { useEffect } from "react";
import Banner from "./Components/Banner";
import Items from "./Components/Items";
import data from "./data";

import food15 from "../../assets/gallery/food15.jpg";

function Menus() {
  // Smooth scrolling
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
      <Banner pic={food15} link="#menus" />
      <div id="menus" className="[&>*]:my-4  my-10">
        {data.map((e, key) => {
          return (
            <div key={key}>
              <h1 className="text-center font-bold text-4xl">{e.title}</h1>
              <h2 className="text-center text-2xl m-4">{e.info}</h2>
              <div className="grid md:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-3">
                {e.items.map((x, key) => {
                  return (
                    <Items
                      key={key}
                      name={x.name}
                      ingred={x.ingred}
                      extra={x.extra}
                      price={x.price}
                    />
                  );
                })}
              </div>
              {key !== data.length - 1 && (
                <div className="flex justify-center my-12">
                  <div className="h-[2px] w-[80vw] bg-black"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menus;
