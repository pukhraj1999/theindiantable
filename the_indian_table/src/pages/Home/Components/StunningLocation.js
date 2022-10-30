import React from "react";
import { NavLink } from "react-router-dom";
function StunningLocation({ pic }) {
  return (
    <div
      className="think h-[42rem]"
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="flex justify-start items-center">
        <div
          className="[&>*]:my-2 px-5 my-60"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="">
            <h1
              style={{ textShadow: "0px 2px 2px black" }}
              className="tracking-wider text-white  font-bold text-center px-2 text-4xl "
            >
              STUNNING LOCATION
            </h1>
          </div>
          <div className="2xl:w-[500px] lg:w-[500px]">
            <p
              style={{ textShadow: "0px 2px 2px black" }}
              className="tracking-wide text-center text-white font-bold px-2"
            >
              The Indian Table Restaurant is located in the heart of{" "}
              <span className="text-yellow-400">
                {" "}
                68 Nelson St, Wallsend NSW 2287, Australia
              </span>
              . Relax in the courtyard, a tasteful outdoor setting where you'll
              be waited on with luxury snacks and drinks.
            </p>
          </div>
          <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
            <div
              style={{ textShadow: "0px 2px 2px black" }}
              className="font-bold px-6 py-2 rounded-md border-2 text-white border-white  hover:bg-white hover:text-yellow-700"
            >
              <NavLink to="/contactus">ContactUs</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StunningLocation;
