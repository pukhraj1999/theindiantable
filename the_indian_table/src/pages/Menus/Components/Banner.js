import React from "react";
function Banner({ pic, link }) {
  return (
    <div
      className="think h-[35rem]"
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
          className="[&>*]:my-2 px-5 my-48"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="">
            <h1 className="tracking-wider text-white  font-bold text-center px-2 text-6xl ">
              Our Menu
            </h1>
          </div>
          <div className="2xl:w-[500px] lg:w-[500px] ">
            <p className="text-2xl italic tracking-wide text-center text-white font-bold ">
              Food for every Mood!!
            </p>
          </div>
          <div className="flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl">
            <div className="font-bold px-6 py-2  text-white border-white ">
              <a href={link}>
                <i className="text-3xl fa-regular fa-circle-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
