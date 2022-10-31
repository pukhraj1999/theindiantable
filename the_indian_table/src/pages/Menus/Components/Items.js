function Items({ name, ingred, price }) {
  return (
    <div className="flex justify-between  bg-slate-600 text-white p-2 rounded-lg drop-shadow-2xl m-2">
      <div className="">
        <h1
          style={{ textShadow: "0px 2px 2px black" }}
          className="font-bold text-2xl"
        >
          {name}
        </h1>
        <p style={{ textShadow: "0px 2px 2px black" }} className="">
          {ingred}
        </p>
      </div>
      <div>
        <p
          className="bg-yellow-600 p-1 rounded-2xl drop-shadow-2xl"
          style={{ textShadow: "0px 2px 2px black" }}
        >
          {price}
        </p>
      </div>
    </div>
  );
}

export default Items;
