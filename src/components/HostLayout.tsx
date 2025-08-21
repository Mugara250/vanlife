import { NavLink, Outlet, useOutletContext } from "react-router-dom";
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
const HostLayout = () => {
  const {vans} = useOutletContext<Props>();
  return (
    <>
      <nav className="py-6 px-6 bg-[#FFF7ED] flex gap-x-6">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "font-medium text-[#4D4D4D] text-lg hover:font-bold hover:underline hover:text-[#161616]"
          }
          end
          to="."
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "font-medium text-[#4D4D4D] text-lg hover:font-bold hover:underline hover:text-[#161616]"
          }
          end
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "font-medium text-[#4D4D4D] text-lg hover:font-bold hover:underline hover:text-[#161616]"
          }
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "font-medium text-[#4D4D4D] text-lg hover:font-bold hover:underline hover:text-[#161616]"
          }
          end
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet context={{vans}}/>
    </>
  );
};

export default HostLayout;
