import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/header/logo.png";

function Navbar() {
  const displayMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("menu");
  };
  return (
    <header>
      <nav className=" bg-white  text-2xl  drop-shadow-md">
        <div className="nav__left [&>a]:px-4 [&>a]:tracking-wider font-thin hover:[&>a]:text-yellow-700 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menus">Menus</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>
        <div className="nav__logo tracking-widest">
          <img className="h-24" src={logo} alt="" />
        </div>
        {/* Appling style to all children links using [&>Tag]:property */}
        <div className="nav__right [&>a]:px-4 [&>a]:tracking-wider font-thin hover:[&>a]:text-yellow-700 ">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contactus">ContactUs</NavLink>
          <NavLink to="/reservations">Reservations</NavLink>
        </div>
        <div
          id="menu"
          className="hidden [&>a]:my-4 [&>a]:px-4 [&>a]:tracking-wider font-thin hover:[&>a]:text-yellow-700  "
        >
          <NavLink
            onClick={() => {
              displayMenu();
            }}
            to="/"
          >
            Home
          </NavLink>
          <hr className="mx-4" />
          <NavLink
            onClick={() => {
              displayMenu();
            }}
            to="/menus"
          >
            Menus
          </NavLink>
          <hr className="mx-4" />
          <NavLink
            onClick={() => {
              displayMenu();
            }}
            to="/gallery"
          >
            Gallery
          </NavLink>
          <hr className="mx-4" />
          <NavLink
            onClick={() => {
              displayMenu();
            }}
            to="/about"
          >
            About
          </NavLink>
          <hr className="mx-4" />
          <NavLink
            onClick={() => {
              displayMenu();
            }}
            to="/contactus"
          >
            ContactUs
          </NavLink>
          <hr className="mx-4 " />
          <NavLink
            onClick={() => {
              displayMenu();
            }}
            to="/reservations"
          >
            Reservations
          </NavLink>
        </div>
      </nav>
      <div className="menuIcon">
        <i
          className="menuIcon text-gray-700 text-xl px-4 py-4 fas fa-bars"
          onClick={() => {
            displayMenu();
          }}
        ></i>
      </div>
    </header>
  );
}

export default Navbar;
