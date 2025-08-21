import {
  Link,
  NavLink,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";

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

const HostVanDetailsLayout = () => {
  const { vans } = useOutletContext<Props>();
  const { id: param } = useParams();
  const currentVan: Van[] = vans.filter(({ id }) => id === param);
  return (
    <div className="bg-[#FFF7ED] px-6 py-10">
      <Link
        to="/vans"
        className="text-base text-[#4D4D4D] font-medium hover:text-[#201F1D] hover:underline"
      >
        &larr; Back to all vans
      </Link>
      <div className="bg-white mt-8 px-6 py-6 rounded-[6px]">
        {currentVan.map(({ imageUrl, name, type, price }) => (
          <div className="flex gap-x-5">
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
    </div>
  );
};

export default HostVanDetailsLayout;
