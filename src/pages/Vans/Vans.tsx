import clsx from "clsx";
import { getVans } from "../../../api";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
interface Van {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl: string;
  type: string;
}

export const loader = () => {
  return getVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const vans = useLoaderData<Van[]>();
  const typeFilter = searchParams.get("type");
  const displayedVans = typeFilter
    ? vans.filter(({ type }) => type === typeFilter)
    : vans;
  // color types
  const typeColors: Record<string, string> = {
    simple: "bg-[#E17654]",
    rugged: "bg-[#115E59]",
  };
  // merging search params
  function generateNewSearchParams(key: string, value: string | null) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }
  // function handleFilterChange(key: string, value: string | null) {
  //   setSearchParams((prevParams) => {
  //     value === null ? prevParams.delete(key) : prevParams.set(key, value);
  //     return prevParams;
  //   });
  // }
  
  return (
    <div className="bg-[#FFF7ED] py-10 px-6">
      <h1 className="font-bold text-[32px]">Explore our van options</h1>
      <div id="select" className="w-4/5 mt-6 flex justify-between">
        <Link
          to={generateNewSearchParams("type", "simple")}
          className={`${
            typeFilter === "simple" ? "bg-[#E17654] text-white" : "bg-[#FFEAD0]"
          }  py-1.5 px-3 rounded-[5px] hover:bg-[#E17654] hover:text-white cursor-pointer`}
        >
          Simple
        </Link>
        <Link
          to={generateNewSearchParams("type", "luxury")}
          className={`${
            typeFilter === "luxury" ? "bg-[#161616] text-white" : "bg-[#FFEAD0]"
          } py-1.5 px-3 rounded-[5px] hover:bg-[#161616] hover:text-white cursor-pointer`}
        >
          Luxury
        </Link>
        <Link
          to={generateNewSearchParams("type", "rugged")}
          className={`${
            typeFilter === "rugged" ? "text-white bg-[#115E59]" : "bg-[#FFEAD0]"
          } py-1.5 px-3 rounded-[5px] hover:bg-[#115E59] hover:text-white cursor-pointer`}
        >
          Rugged
        </Link>
        {typeFilter && (
          <Link
            to={generateNewSearchParams("type", null)}
            className="py-1.5 px-3 hover:underline"
          >
            Clear filters
          </Link>
        )}

        {/* <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`${
            typeFilter === "simple" ? "bg-[#E17654] text-white" : "bg-[#FFEAD0]"
          }  py-1.5 px-3 rounded-[5px] hover:bg-[#E17654] hover:text-white cursor-pointer`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`${
            typeFilter === "luxury" ? "bg-[#161616] text-white" : "bg-[#FFEAD0]"
          } py-1.5 px-3 rounded-[5px] hover:bg-[#161616] hover:text-white cursor-pointer`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`${
            typeFilter === "rugged" ? "text-white bg-[#115E59]" : "bg-[#FFEAD0]"
          } py-1.5 px-3 rounded-[5px] hover:bg-[#115E59] hover:text-white cursor-pointer`}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="py-1.5 px-3 cursor-pointer hover:underline"
          >
            Clear filters
          </button>
        )} */}
      </div>
      <div id="vans" className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
        {displayedVans.map(({ id, name, price, imageUrl, type }) => {
          return (
            <Link
              key={id}
              to={`${id}`}
              state={{ search: `?${searchParams.toString()}` }}
              aria-label={`View details for ${name} priced at $${price} per day`}
            >
              <div className="">
                <img
                  src={imageUrl}
                  alt={`Image of ${name}`}
                  className="rounded-xl"
                />
              </div>
              <div className="font-semibold text-[20px] flex justify-between mt-3 mb-2">
                <h1>{name}</h1>
                <div>${price}/day</div>
              </div>
              <span
                className={clsx(
                  "py-1.5 px-4 text-white rounded-lg",
                  typeColors[type] || "bg-[#161616]"
                )}
              >
                {type}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Vans;
