import error from "../assets/error.gif";
function Error() {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center">
        <img className="m-4" src={error} alt="" />
      </div>
    </div>
  );
}

export default Error;
