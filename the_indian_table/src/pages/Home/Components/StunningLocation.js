import React from "react";
import { NavLink } from "react-router-dom";
function StunningLocation({ pic }) {
  return (
    <div
      className="think h-[47rem]"
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="flex justify-start items-center p-6">
        <div
          className="[&>*]:my-2 p-4 my-60 bg-slate-600 rounded-lg"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="">
            <h1 className="tracking-wider text-white  font-bold text-center px-2 text-4xl ">
              STUNNING LOCATION
            </h1>
          </div>
          <div className="2xl:w-[500px] lg:w-[500px]">
            <p className=" tracking-wide text-left text-white font-bold px-2 my-4">
              The Indian Table Restaurant is located in the heart of{" "}
              <span className="italic text-yellow-400 ">
                {" "}
                68 Nelson St, Wallsend NSW 2287, Australia
              </span>
              . Relax in the courtyard, a tasteful outdoor setting where you'll
              be waited on with luxury snacks and drinks.
            </p>
          </div>
          <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
            <div className="my-2 font-bold px-6 py-2 rounded-md border-2 text-white border-white  hover:bg-white hover:text-slate-600">
              <NavLink to="/contactus">ContactUs</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StunningLocation;
