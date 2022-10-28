import React, { useState } from "react";

function Testinomials({ pic }) {
  const data = [
    {
      name: "Jan Sepherd",
      review:
        "I really cannot speak highly enough of this place. Not only is this the best Indian food I've ever experienced but they're a lovely team too. I feel so lucky to live close enough that I can visit whenever I like.",
    },
    {
      name: "Konark Deshpande",
      review:
        "We had our daughter's first year birthday party organized with The Indian Table. Great service! tasty food no doubt! we had last minute guest but Navi and his team took extra efforts to serve them. really appreciate! thanks Navi! definitely recommend this place.",
    },
    {
      name: "Samuel Evans",
      review:
        "We had a delicious dinner tonight and had a really great time.Food was authentic and came out quite quickly. The goat curry was particularly yummy, just be careful of the few bones in there. Rice was done perfectly too.A huge shout out to our server Mahalia who was very polite, fun and attentive. Will definitely be back again!",
    },
  ];
  const [Idx, setIdx] = useState(0);
  const Prev = () => {
    if (Idx < data.length - 1) setIdx(Idx + 1);
    else setIdx(0);
  };
  const Next = () => {
    if (Idx < data.length - 1) setIdx(Idx + 1);
    else setIdx(0);
  };
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
            <div className="slide">
              <div className="2xl:w-[500px] lg:w-[500px]">
                <p
                  style={{ textShadow: "0px 2px 2px black" }}
                  className="tracking-wide text-center text-white font-bold px-2"
                >
                  {data[Idx].review}
                </p>
              </div>
              <div className="2xl:w-[500px] lg:w-[500px]">
                <p
                  style={{ textShadow: "0px 2px 2px black" }}
                  className="text-yellow-300 text-xl tracking-wide text-center  font-bold px-2"
                >
                  {data[Idx].name}
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:px-40 2xl:px-40 px-10">
              <button
                style={{
                  textShadow: "0px 2px 2px black",
                }}
                onClick={() => {
                  Prev();
                }}
              >
                <i className="text-3xl text-yellow-700 fa-solid fa-backward"></i>
              </button>
              <button
                style={{
                  textShadow: "0px 2px 2px black",
                }}
                onClick={() => {
                  Next();
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
