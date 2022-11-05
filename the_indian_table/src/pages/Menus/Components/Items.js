function Items({ name, ingred, price, extra }) {
  return (
    <div className="flex justify-between  m-4">
      <div className="">
        <h1 className="text-slate-700 font-bold text-xl">{name}</h1>
        <p className="">{ingred}</p>
        <p className="text-red-400">{extra}</p>
      </div>
      <p className="text-sm rounded-2xl text-black font-bold">{price}</p>
    </div>
  );
}

export default Items;
