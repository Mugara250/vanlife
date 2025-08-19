import { NavLink } from "react-router-dom";

const HostVanDetailsLayout = () => {
  return (
    <>
      <nav className="py-6 text-base flex gap-x-6">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "font-medium text-[#4D4D4D] hover:font-bold hover:underline hover:text-[#161616]"
          }
          end
          to="/host/vans:id"
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
          to="/host/vans:id/pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "font-medium text-[#4D4D4D] hover:font-bold hover:underline hover:text-[#161616]"
          }
          to="/host/vans:id/photos"
        >
          Photos
        </NavLink>
      </nav>
    </>
  );
};

export default HostVanDetailsLayout;
