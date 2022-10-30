function Items({ name, ingred, price }) {
  return (
    <div className="flex justify-between items-center bg-white p-2 rounded-lg drop-shadow-2xl m-2">
      <div className="">
        <h1
          style={{ textShadow: "0px 0.5px 1px black" }}
          className="font-bold text-2xl"
        >
          {name}
        </h1>
        <p className="">{ingred}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Items;
