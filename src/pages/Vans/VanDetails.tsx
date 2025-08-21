import { Link, useOutletContext, useParams } from "react-router-dom";
import clsx from "clsx";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

interface Props {
  vans: Van[];
}

const VanDetails = () => {
  const { id: param } = useParams<{ id: string }>();
  const { vans } = useOutletContext<Props>();
  const details = vans.filter(({ id }) => id === param)[0];

  const typeColors: Record<string, string> = {
    simple: "bg-[#E17654]",
    rugged: "bg-[#115E59]",
    luxury: "bg-[#F6C90E]",
  };

  return (
    <div className="bg-[#FFF7ED] px-8 pt-7 pb-16">
      <Link to=".." relative="path" className="hover:underline">
        &larr; Back to all vans
      </Link>
      <div className="mt-8 mb-12">
        <img
          src={details.imageUrl}
          alt={`Image of ${details.name}`}
          className="rounded-lg"
        />
      </div>
      <span
        className={clsx(
          "py-1.5 px-4 text-white rounded-lg",
          typeColors[details.type] || "bg-[#161616]"
        )}
      >
        {details.type}
      </span>
      <div>
        <h1 className="mt-4 mb-4 font-bold text-[32px]">{details.name}</h1>
        <span className="text-2xl">
          <span className="font-bold">${details.price}</span> per day
        </span>
        <p className="mt-3">{details.description}</p>
        <button className="bg-[#FF8C38] mt-6 text-[18px] text-white font-bold rounded-xl py-4 px-1.5 w-full">
          Find your van
        </button>
      </div>
    </div>
  );
};

export default VanDetails;
