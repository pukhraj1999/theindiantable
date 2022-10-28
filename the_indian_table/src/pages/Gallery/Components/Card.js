import React from "react";
function Card({ pic }) {
  return (
    <div className="flex justify-center">
      <button className="p-4">
        <img className="rounded-lg h-[300px]" src={pic} alt="" />
      </button>
    </div>
  );
}

export default Card;
