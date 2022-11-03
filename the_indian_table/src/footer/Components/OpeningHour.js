import React from "react";
function OpeningHour({ day, hours, nightHr }) {
  return (
    <div className="[&>*]:text-gray-600 flex justify-between">
      <p className="px-4">{day}</p>
      <p className="px-4">
        {hours} <br /> {nightHr}
      </p>
    </div>
  );
}
export default OpeningHour;
