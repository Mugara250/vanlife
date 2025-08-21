import clsx from "clsx";
import { Link, useOutletContext } from "react-router-dom";
interface Van {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl: string;
  type: string;
}

interface Props {
  vans: Van[];
}
const Vans = () => {
const { vans } = useOutletContext<Props>();
  return (
    <div className="bg-[#FFF7ED] py-10 px-6">
      <h1 className="font-bold text-[32px]">Explore our van options</h1>
      <div id="select" className="w-4/5 mt-6 flex justify-between">
        <div className="bg-[#FFEAD0] py-1.5 px-3">Simple</div>
        <div className="bg-[#FFEAD0] py-1.5 px-3">Luxury</div>
        <div className="bg-[#FFEAD0] py-1.5 px-3">Rugged</div>
        <div className="py-1.5 px-3">
          <a href="#" className="hover:underline">
            Clear filters
          </a>
        </div>
      </div>
      <div id="vans" className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
        {vans.map(({ id, name, price, imageUrl, type }) => {
          return (
            <VanDetails
              key={id}
              id={id}
              name={name}
              price={price}
              imageUrl={imageUrl}
              type={type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Vans;

const VanDetails = ({ id, name, price, imageUrl, type }: Van) => {
  const typeColors: Record<string, string> = {
    simple: "bg-[#E17654]",
    rugged: "bg-[#115E59]",
  };
  return (
    <Link
      to={`/vans/${id}`}
      aria-label={`View details for ${name} priced at $${price} per day`}
    >
      <div className="">
        <img src={imageUrl} alt={`Image of ${name}`} className="rounded-xl" />
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
};
