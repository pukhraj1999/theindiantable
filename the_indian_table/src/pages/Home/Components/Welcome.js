import React from "react";
import { NavLink } from "react-router-dom";
function Welcome({ pic }) {
  return (
    <div className="bg-white drop-shadow-lg">
      <div className="grid lg:grid-row-1 lg:grid-cols-2 2xl:grid-row-1 2xl:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="my-4  px-6  [&>*]:my-4">
            <h1 className="text-5xl text-center font-bold ">
              Welcome to{" "}
              <span className="text-yellow-600">The Indian Table</span>
            </h1>
            <h2 className="text-2xl text-center  ">The Real Flavours</h2>
            <p>
              It is our pleasure to introduce our Indian Restaurant to you. The
              Indian Table offers the ideal setting for you and your guests,
              whether you are looking for a romantic setting for two, a takeaway
              or home delivery meal, or anything in between. Located in{" "}
              <span className="text-yellow-600">
                68 Nelson St, Wallsend NSW 2287, Australia
              </span>{" "}
              . The Indian Table offers diners a warm environment and friendly,
              professional service.
            </p>
            <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
              <div className="px-6 py-2 rounded-md border-2 border-yellow-700  hover:bg-yellow-700 hover:text-white">
                <NavLink to="/menus">Menus</NavLink>
              </div>
              <div className="px-6 py-2 rounded-md border-2 border-yellow-700  hover:bg-yellow-700 hover:text-white">
                <NavLink to="/gallery">Gallery</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside">
          <img className=" bg-white shadow-2xl" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
