import {
  Await,
  Link,
  useLoaderData,
  useLocation,
  type LoaderFunctionArgs,
} from "react-router-dom";
import clsx from "clsx";
import { getVans } from "../../../api";
import { Suspense } from "react";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export async function loader({ params }: LoaderFunctionArgs) {
  return { vanDetailsData: getVans(params.id) };
}

const VanDetails = () => {
  const { vanDetailsData } = useLoaderData();

  const { state } = useLocation();

  const typeColors: Record<string, string> = {
    simple: "bg-[#E17654]",
    rugged: "bg-[#115E59]",
    luxury: "bg-[#F6C90E]",
  };
  const renderVanDetails = ({
    name,
    imageUrl,
    price,
    description,
    type,
  }: Van) => {
    return (
      <>
        <Link
          to={state ? `..${state.search}` : ".."}
          relative="path"
          className="hover:underline"
        >
          &larr;
          <span className="ml-2">
            {state.search === "?" ? "Back to all vans" : `Back to ${type} vans`}
          </span>
        </Link>
        <div className="mt-8 mb-12">
          <img src={imageUrl} alt={`Image of ${name}`} className="rounded-lg" />
        </div>
        <span
          className={clsx(
            "py-1.5 px-4 text-white rounded-lg",
            typeColors[type] || "bg-[#161616]"
          )}
        >
          {type}
        </span>
        <div>
          <h1 className="mt-4 mb-4 font-bold text-[32px]">{name}</h1>
          <span className="text-2xl">
            <span className="font-bold">${price}</span> per day
          </span>
          <p className="mt-3">{description}</p>
          <button className="bg-[#FF8C38] mt-6 text-[18px] text-white font-bold rounded-xl py-4 px-1.5 w-full">
            Find your van
          </button>
        </div>
      </>
    );
  };
  return (
    <div className="bg-[#FFF7ED] px-8 pt-7 pb-16">
      <Suspense
        fallback={
          <h1 className="font-bold text-[32px]">Explore our van options</h1>
        }
      >
        <Await resolve={vanDetailsData}>{renderVanDetails}</Await>
      </Suspense>
    </div>
  );
};

export default VanDetails;
