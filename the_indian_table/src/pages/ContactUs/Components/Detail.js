import React from "react";
function Detail({ icon, text, title, link }) {
  return (
    <div className="flex justify-center item-center text-center drop-shadow-2xl rounded-lg bg-slate-600 text-white p-2">
      <div className="">
        <i
          style={{ textShadow: "0px 2px 2px black" }}
          className={`text-4xl  ${icon}`}
        ></i>
        <h1
          style={{ textShadow: "0px 2px 2px black" }}
          className="text-xl font-bold"
        >
          {title}
        </h1>
        <div style={{ textShadow: "0px 2px 2px black" }}>
          <a className="text-lg" target="_blank" href={link}>
            {text}
            <br />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Detail;
