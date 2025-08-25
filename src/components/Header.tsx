import { LogOutIcon, UserCircle2Icon } from "lucide-react";
import { NavLink } from "react-router-dom";

function fakeLogOut() {
  localStorage.removeItem("loggedIn");
}

const Header = () => {
  return (
    <>
      <header className="bg-[#FFF7ED] flex justify-between py-10 px-6">
        <NavLink to="/" className="font-extrabold text-3xl">
          #VANLIFE
        </NavLink>
        <nav className="text-base flex justify-center items-center gap-x-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616]"
                : "text-[#4D4D4D] font-semibold hover:font-bold hover:text-black hover:underline"
            }
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616]"
                : "text-[#4D4D4D] font-semibold hover:font-bold hover:text-black hover:underline"
            }
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616]"
                : "text-[#4D4D4D] font-semibold hover:font-bold hover:text-black hover:underline"
            }
            to="vans"
          >
            Vans
          </NavLink>
          <NavLink to="login">
            <UserCircle2Icon />
          </NavLink>
          <button className="cursor-pointer" onClick={fakeLogOut}>
            <LogOutIcon />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
