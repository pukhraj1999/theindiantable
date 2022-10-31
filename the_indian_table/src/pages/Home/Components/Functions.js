import React from "react";
import { NavLink } from "react-router-dom";
function Functions({ pic }) {
  return (
    <div
      className="think h-[45rem]"
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="flex justify-center items-center p-6">
        <div
          className="[&>*]:my-2 px-5 my-40 p-4 bg-slate-600 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="">
            <h1
              style={{ textShadow: "0px 2px 2px black" }}
              className="tracking-wider text-white  font-bold text-center px-2 text-4xl "
            >
              FUNCTIONS AND EVENTS
            </h1>
          </div>
          <div className="2xl:w-[500px] lg:w-[500px]">
            <p
              style={{ textShadow: "0px 2px 2px black" }}
              className="tracking-wide text-center text-white font-bold px-2"
            >
              The Indian Table Restaurant is the perfect restaurant to hold your
              next function or event. From birthday parties to wedding
              receptions and other special occasions, let The Indian Table
              arrange all the details.
            </p>
          </div>
          <div className="2xl:w-[500px] lg:w-[500px]">
            <p
              style={{ textShadow: "0px 2px 2px black" }}
              className="tracking-wide text-center text-white font-normal px-2"
            >
              To make an enquiry fill in your event details on our function
              enquiry form by clicking the button below
            </p>
          </div>
          <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
            <div
              style={{ textShadow: "0px 1px 1px black" }}
              className="text-center font-bold px-6 py-2 rounded-md border-2 text-white border-white  hover:bg-white hover:text-yellow-700"
            >
              <NavLink to="/contactus">Make a Function Enquery</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Functions;
