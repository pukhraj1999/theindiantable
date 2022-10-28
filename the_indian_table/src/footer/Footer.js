import React from "react";
import { NavLink } from "react-router-dom";
import TradingHour from "./Components/TradingHour";

function Footer() {
  return (
    <div className="mt-1">
      <div className="bg-black ">
        <div className="text-white grid 2xl:grid-cols-3 lg:grid-cols-3 pt-20 [&>*]:my-5">
          <div className="flex justify-center">
            <div>
              <h1 className="text-2xl text-bold">THE INDIAN TABLE</h1>
              <p className="text-md text-bold text-gray-500 py-2 mb-5">
                The Real Flabours
              </p>
              <NavLink
                to="/Reservations"
                className="px-6 py-2 rounded-md border-2 bg-white text-black"
              >
                <span>
                  <i class="fa-solid fa-pen-to-square"></i> Make a Reservations
                </span>
              </NavLink>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-2xl text-bold">TRADING HOURS</h1>
              <div className="py-2">
                <TradingHour day="Sunday" hours="5:00 PM to 10:00 PM" />
                <TradingHour day="Monday" hours="5:00 PM to 10:00 PM" />
                <TradingHour day="Tuesday" hours="5:00 PM to 10:00 PM" />
                <TradingHour day="Wednesday" hours="5:00 PM to 10:00 PM" />
                <TradingHour day="Thursday" hours="5:00 PM to 10:30 PM" />
                <TradingHour day="Friday" hours="5:00 PM to 10:30 PM" />
                <TradingHour day="Saturday" hours="5:00 PM to 10:30 PM" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="text-2xl text-bold">CONTACT US</h1>
              <p className="text-md text-bold text-gray-500 py-2 mb-5">
                68 Nelson St, Wallsend <br />
                NSW 2287, Australia
              </p>
              <p className="text-md text-bold text-gray-500 py-2 mt-10">
                Email:- abc@gmail.com
              </p>
              <p className="text-md text-bold text-gray-500">
                Phone:- 9946476465
              </p>
            </div>
          </div>
        </div>
        <div className="text-3xl flex justify-center text-white [&>*]:mx-6 [&>*]:mb-6">
          <a target="__blank" href="#">
            <i class="text-blue-500 fa-brands fa-facebook"></i>
          </a>
          <a target="__blank" href="#">
            <i className="text-red-700 fa-brands fa-instagram"></i>
          </a>
          <a target="__blank" href="#">
            <i class="text-gray-600 fa-solid fa-map-location-dot"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
