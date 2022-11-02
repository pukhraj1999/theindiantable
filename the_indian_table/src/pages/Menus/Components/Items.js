function Items({ name, ingred, price }) {
  return (
    <div className="border-4 border-yellow-600 flex justify-between  bg-slate-600 text-white p-2 rounded-2xl  m-2">
      <div className="">
        <h1
          style={{ textShadow: "0px 2px 2px black" }}
          className="text-yellow-600 font-bold text-2xl"
        >
          {name}
        </h1>
        <p style={{ textShadow: "0px 2px 2px black" }} className="">
          {ingred}
        </p>
      </div>
      <div
        style={{
          translate: "45% -50%",
        }}
        className="bg-yellow-600 h-12 w-12 rounded-full flex justify-center items-center"
      >
        <p className=" p-1 text-sm rounded-2xl text-black font-bold">{price}</p>
      </div>
    </div>
  );
}

export default Items;
