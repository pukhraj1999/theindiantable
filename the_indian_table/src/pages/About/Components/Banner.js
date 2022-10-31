import React from "react";
function Banner({ pic }) {
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
      <div className="flex justify-center items-center p-6">
        <div className="[&>*]:my-2  my-40  drop-shadow-lg rounded-2xl m-4 p-4 bg-slate-600">
          <div className="">
            <h1
              style={{ textShadow: "0px 2px 2px black" }}
              className="tracking-wider text-white  font-bold text-center px-2 text-4xl "
            >
              Who we are?
            </h1>
          </div>
          <div className="2xl:w-[500px] lg:w-[500px]">
            <p
              style={{ textShadow: "0px 2px 2px black" }}
              className="text-lg  tracking-wide text-center text-white font-bold px-2"
            >
              Here at The Indian Table in Wallsend, and are proud to serve the
              surrounding area. We serve a variety of food such as biriyani,
              balti, tandoori and more. You can find our whole menu on our
              website, filled with mouth-watering dishes and catering for all
              kinds of different tastes!
            </p>
          </div>
          <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
            <div
              style={{ textShadow: "0px 1px 0px black" }}
              className="font-bold px-6 py-2 rounded-md border-2 text-white border-white  hover:bg-white hover:text-slate-600"
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

export default Banner;
