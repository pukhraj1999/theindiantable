import React, { useState, useEffect } from "react";
import Banner from "./Components/Banner";
import Items from "./Components/Items";
import data from "./data";
import sanityClient from "../../api";

import food15 from "../../assets/gallery/food15.jpg";

function Menus() {
  // Fetching Data
  const [menus, setMenus] = useState(null);
  const [category, setCategory] = useState(null);
  const fetchMenus = () => {
    sanityClient
      .fetch(
        `*[_type=="menus"]{
      title,
      price,
      body,
      categories
    }`
      )
      .then((res) => {
        setMenus(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchCategories = () => {
    sanityClient
      .fetch(
        `*[_type=="category"]{
    _id,
    title,
  }`
      )
      .then((res) => {
        setCategory(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchCategories();
    fetchMenus();
  }, []);
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
        {category &&
          menus &&
          category.map((e, key) => {
            return (
              <div key={key}>
                <h1 className="text-center font-bold text-4xl">{e.title}</h1>
                <div className="grid md:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-3 m-4">
                  {menus.map((x, key) => {
                    if (e._id === x.categories[0]._ref)
                      return (
                        <Items
                          key={key}
                          name={x.title}
                          ingred={x.body[0].children[0].text}
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
      {/* {category &&
        menus &&
        category.map((e, key) => {
          return menus.map((x, key) => {
            if (e._id === x.categories[0]._ref) console.log(x.title);
          });
        })} */}
    </div>
  );
}

export default Menus;
