import React from "react";
function Detail({ icon, text, title, link }) {
  return (
    <div className="flex justify-center item-center text-center drop-shadow-2xl rounded-lg bg-slate-600 text-white p-2">
      <div className="[&>*]:my-1">
        <i className={`text-4xl  ${icon}`}></i>
        <h1 className="text-xl font-bold">{title}</h1>
        <div>
          <a className="text-lg" target="_blank" rel="noreferrer" href={link}>
            {text}
            <br />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Detail;
