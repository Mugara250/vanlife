import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
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
          to="/host"
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
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "font-medium text-[#4D4D4D] text-lg hover:font-bold hover:underline hover:text-[#161616]"
          }
          to="/host/vans"
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
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
