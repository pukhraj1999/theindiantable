import React from "react";
function Detail({ icon, text, title, link }) {
  return (
    <div className="flex justify-center item-center text-center drop-shadow-xl rounded-lg">
      <div>
        <i
          style={{ textShadow: "0px 2px 2px black" }}
          className={`text-4xl text-gray-700 ${icon}`}
        ></i>
        <h1 className="text-xl font-bold">{title}</h1>
        <div>
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
