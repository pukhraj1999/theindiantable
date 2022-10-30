import React from "react";
function Banner({ pic, link }) {
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
      <div className="flex justify-center items-center">
        <div
          className="[&>*]:my-2  my-40 bg-white drop-shadow-lg rounded-2xl m-4 p-4"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
          style={{
            backgroundImage: `url(${pic})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
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
              className="text-lg tracking-wide text-center text-white font-bold px-2"
            >
              Here at The Indian Table in Wallsend, and are proud to serve the
              surrounding area. We serve a variety of food such as biriyani,
              balti, tandoori and more. You can find our whole menu on our
              website, filled with mouth-watering dishes and catering for all
              kinds of different tastes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
