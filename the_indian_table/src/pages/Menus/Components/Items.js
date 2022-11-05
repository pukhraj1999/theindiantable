function Items({ name, ingred, price, extra }) {
  return (
    <div className=" flex justify-between p-2 rounded-2xl  m-2">
      <div className="">
        <h1 className="text-slate-700 font-bold text-2xl">{name}</h1>
        <p className="">{ingred}</p>
        <p className="text-red-400">{extra}</p>
      </div>
      <div className=" h-12 w-12 rounded-full flex justify-center items-center">
        <p className=" p-1 text-sm rounded-2xl text-black font-bold">{price}</p>
      </div>
    </div>
  );
}

export default Items;
