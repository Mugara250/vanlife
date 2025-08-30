import {
  Await,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
  type LoaderFunctionArgs,
} from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

interface Props {
  vansData: Promise<Van[]>;
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  return { vansData: getHostVans() };
}

const HostVanDetailsLayout = () => {
  const { vansData }: Props = useLoaderData();

  const RenderVanDetails = (vans: Van[]) => {
    const { id: param } = useParams();
    const currentVan = vans.filter(({ id }) => id === param);
    return (
      <>
        <div className="bg-white mt-8 px-6 py-6 rounded-[6px]">
          {currentVan.map(({ id, imageUrl, name, type, price }) => (
            <div key={id} className="flex gap-x-5">
              <div className="w-[160.14981079101562px] h-[157.90322875976562px]">
                <img
                  src={imageUrl}
                  alt={`Image of ${name}`}
                  className="rounded-[3px]"
                />
              </div>
              <div className="pt-6">
                <div className="w-[69.79618835449219px] bg-[#E17654] text-[13px] font-semibold text-center text-[#FFEAD0] py-1 rounded-[5px] ">
                  {type}
                </div>
                <h1 className="text-[26.06px] font-bold pt-2">{name}</h1>
                <h2 className="text-[16.29px] font-medium">
                  <span className="text-[19.54px] font-bold">${price}</span>/day
                </h2>
              </div>
            </div>
          ))}
          <nav className="py-6 text-base flex gap-x-6">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-[#161616]"
                  : "font-medium text-[#4D4D4D] hover:font-bold hover:underline hover:text-[#161616]"
              }
              end
              to="."
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-[#161616]"
                  : "font-medium text-[#4D4D4D] hover:font-bold hover:underline hover:text-[#161616]"
              }
              end
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-[#161616]"
                  : "font-medium text-[#4D4D4D] hover:font-bold hover:underline hover:text-[#161616]"
              }
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      </>
    );
  };

  return (
    <div className="bg-[#FFF7ED] px-6 py-10">
      <Link
        to=".."
        relative="path"
        className="text-base text-[#4D4D4D] font-medium hover:text-[#201F1D] hover:underline"
      >
        &larr; Back to all vans
      </Link>
      <Suspense
        fallback={<h1 className="font-bold text-[32px]">Loading vans ....</h1>}
      >
        <Await resolve={vansData}>
          {RenderVanDetails}
        </Await>
      </Suspense>
    </div>
  );
};

export default HostVanDetailsLayout;
