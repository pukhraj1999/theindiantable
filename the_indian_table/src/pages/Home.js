import React from "react";
import "./styles/Home.css";
import food1 from "../assets/banner/food1.jpg";
import food2 from "../assets/banner/food2.jpg";
import food3 from "../assets/banner/food3.jpg";
import food4 from "../assets/banner/food4.png";
import food5 from "../assets/banner/food5.png";
import food6 from "../assets/banner/food6.jpg";
import food7 from "../assets/banner/food7.jpg";
import food8 from "../assets/banner/food8.jpg";
import food9 from "../assets/banner/food9.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  const addTextShadow = {
    textShadow: "0px 2px 2px black",
  };
  return (
    <div>
      {/* New Section */}
      <div
        className="think h-[30rem]"
        style={{
          backgroundImage: `url(${food6})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="flex justify-center items-center">
          <div className="[&>*]:my-2 px-5 my-40">
            <div className="shadow-md  shadow-black bg-white">
              <h1
                style={addTextShadow}
                className="tracking-wider text-yellow-600 font-bold text-center px-2 text-4xl "
              >
                The Indian Table
              </h1>
            </div>
            <div className="2xl:w-[500px] lg:w-[500px]">
              <p
                style={addTextShadow}
                className="tracking-wide text-center text-white font-bold px-2"
              >
                "All great deeds and all great thoughts have a ridiculous
                beginning. Great works are often born on a street corner or in a
                restaurant's revolving door."
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* New Section */}
      <div className="bg-white drop-shadow-lg">
        <div className="grid lg:grid-row-1 lg:grid-cols-2 2xl:grid-row-1 2xl:grid-cols-2">
          <div className="flex justify-center items-center">
            <div className="my-4  px-2  [&>*]:my-4">
              <h1
                style={addTextShadow}
                className="text-4xl text-center font-bold "
              >
                Welcome to{" "}
                <span className="text-yellow-600">The Indian Table</span>
              </h1>
              <h2 className="text-2xl text-center  ">The Real Flavours</h2>
              <p>
                It is our pleasure to introduce our Indian Restaurant to you.
                The Indian Table offers the ideal setting for you and your
                guests, whether you are looking for a romantic setting for two,
                a takeaway or home delivery meal, or anything in between.
                Located in{" "}
                <span className="text-yellow-600">
                  68 Nelson St, Wallsend NSW 2287, Australia
                </span>{" "}
                . The Indian Table offers diners a warm environment and
                friendly, professional service.
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
            <img className=" bg-white shadow-2xl" src={food1} alt="" />
          </div>
        </div>
      </div>
      {/* New Section */}
      <div
        className="think h-[42rem]"
        style={{
          backgroundImage: `url(${food7})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="flex justify-start items-center">
          <div className="[&>*]:my-2 px-5 my-60">
            <div className="">
              <h1
                style={addTextShadow}
                className="tracking-wider text-white  font-bold text-center px-2 text-4xl "
              >
                STUNNING LOCATION
              </h1>
            </div>
            <div className="2xl:w-[500px] lg:w-[500px]">
              <p
                style={addTextShadow}
                className="tracking-wide text-center text-white font-bold px-2"
              >
                The Indian Table Restaurant is located in the heart of{" "}
                <span className="text-yellow-400">
                  {" "}
                  68 Nelson St, Wallsend NSW 2287, Australia
                </span>
                . Relax in the courtyard, a tasteful outdoor setting where
                you'll be waited on with luxury snacks and drinks.
              </p>
            </div>
            <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
              <div
                style={addTextShadow}
                className="font-bold px-6 py-2 rounded-md border-2 text-white border-white  hover:bg-white hover:text-yellow-700"
              >
                <NavLink to="/contactus">ContactUs</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Section */}
      <div
        className="think h-[42rem]"
        style={{
          backgroundImage: `url(${food8})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="flex justify-center items-center">
          <div className="[&>*]:my-2 px-5 my-60">
            <div className="">
              <h1
                style={addTextShadow}
                className="tracking-wider text-white  font-bold text-center px-2 text-4xl "
              >
                FUNCTIONS AND EVENTS
              </h1>
            </div>
            <div className="2xl:w-[500px] lg:w-[500px]">
              <p
                style={addTextShadow}
                className="tracking-wide text-center text-white font-bold px-2"
              >
                The Indian Table Restaurant is the perfect restaurant to hold
                your next function or event. From birthday parties to wedding
                receptions and other special occasions, let The Indian Table
                arrange all the details.
              </p>
            </div>
            <div className="2xl:w-[500px] lg:w-[500px]">
              <p
                style={addTextShadow}
                className="tracking-wide text-center text-white font-normal px-2"
              >
                To make an enquiry fill in your event details on our function
                enquiry form by clicking the button below
              </p>
            </div>
            <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
              <div
                style={addTextShadow}
                className="font-bold px-6 py-2 rounded-md border-2 text-white border-white  hover:bg-white hover:text-yellow-700"
              >
                <NavLink to="/contactus">Make a Function Enquery</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Section */}
      <div
        className="think h-[42rem]"
        style={{
          backgroundImage: `url(${food9})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="flex justify-end items-center">
          <div className="[&>*]:my-2 px-5 my-60">
            <div className="">
              <h1
                style={addTextShadow}
                className="tracking-wider text-white  font-bold text-center px-2 text-4xl "
              >
                Testimonials
              </h1>
            </div>
            <div className="2xl:w-[500px] lg:w-[500px]">
              <p
                style={addTextShadow}
                className="tracking-wide text-center text-white font-bold px-2"
              >
                The Indian Table Restaurant is the perfect restaurant to hold
                your next function or event. From birthday parties to wedding
                receptions and other special occasions, let The Indian Table
                arrange all the details.
              </p>
            </div>
            <div className="2xl:w-[500px] lg:w-[500px]">
              <p
                style={addTextShadow}
                className="text-lg tracking-wide text-center text-white font-bold px-2"
              >
                Name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
