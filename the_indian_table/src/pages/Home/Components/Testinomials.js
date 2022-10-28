import React from "react";

function Testinomials({ pic }) {
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
      <div className="flex justify-end items-center">
        <div className="[&>*]:my-2 px-5 my-60">
          <div className="">
            <h1
              style={{ textShadow: "0px 2px 2px black" }}
              className="tracking-wider text-white  font-bold text-center px-2 text-4xl "
            >
              Testimonials
            </h1>
          </div>
          <div className="sliders">
            <div className="sliderBox ">
              <div className="slide">
                <div className="2xl:w-[500px] lg:w-[500px]">
                  <p
                    style={{ textShadow: "0px 2px 2px black" }}
                    className="tracking-wide text-center text-white font-bold px-2"
                  >
                    The Indian Table Restaurant is the perfect restaurant to
                    hold your next function or event. From birthday parties to
                    wedding receptions and other special occasions, let The
                    Indian Table arrange all the details.
                  </p>
                </div>
                <div className="2xl:w-[500px] lg:w-[500px]">
                  <p
                    style={{ textShadow: "0px 2px 2px black" }}
                    className="text-lg tracking-wide text-center text-white font-bold px-2"
                  >
                    Name
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between lg:px-40 2xl:px-40 px-10">
              <button
                style={{
                  textShadow: "0px 2px 2px black",
                }}
              >
                <i className="text-3xl text-yellow-700 fa-solid fa-backward"></i>
              </button>
              <button
                style={{
                  textShadow: "0px 2px 2px black",
                }}
              >
                <i className="text-3xl text-yellow-700 fa-solid fa-forward"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testinomials;
