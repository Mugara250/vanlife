import { Link } from "react-router-dom";
const CatchAll = () => {
  return (
    <div className="bg-[#FFF7ED] px-6 py-20 flex flex-col gap-y-4">
        <h1 className="text-[32px] font-bold">Sorry, the page you were <br /> looking for was not found.</h1>
        <Link to=".." className="bg-[#161616] text-white text-[18px] text-center font-bold mt-1.5 rounded-xl py-4 px-10">Return to home</Link>
    </div>
  );
};

export default CatchAll;
