import React from "react";
function Headings({ pic }) {
  return (
    <div
      className="think h-[30rem]"
      style={{
        backgroundImage: `url(${pic})`,
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
              style={{ textShadow: "0px 2px 2px black" }}
              className="tracking-wider text-yellow-600 font-bold text-center px-2 text-4xl "
            >
              The Indian Table
            </h1>
          </div>
          <div className="2xl:w-[500px] lg:w-[500px]">
            <p
              style={{ textShadow: "0px 2px 2px black" }}
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
  );
}

export default Headings;
