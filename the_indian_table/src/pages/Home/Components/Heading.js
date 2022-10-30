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
        <div
          className="[&>*]:my-2 px-5 my-40"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
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
          <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
            <div
              style={{ textShadow: "0px 2px 0px black" }}
              className="font-bold px-6 py-2 rounded-md border-2 text-white border-white  hover:bg-white hover:text-black"
            >
              <a
                target="__blank"
                href="https://theindiantableonline.com.au/order-now#indo-chinese"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headings;
