import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Vans from "./Vans";
import "../server";
import VanDetails from "./VanDetails";
function App() {
  return (
    <div className="w-[40%] mx-auto">
      <header className="bg-[#FFF7ED] flex justify-between py-10 px-6">
        <Link to="/" className="font-extrabold text-3xl">
          #VANLIFE
        </Link>
        <nav className="text-base flex gap-x-4">
          <Link
            className="text-[#4D4D4D] font-semibold hover:text-black hover:underline"
            to="/about"
          >
            About
          </Link>
          <Link
            to="/vans"
            className="text-[#4D4D4D] font-semibold hover:text-black hover:underline"
          >
            Vans
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes >
      <footer className="bg-[#252525] text-[#AAAAAA] text-center py-5">
        &copy; 2022 #VANLIFE
      </footer>
    </div>
  );
}

export default App;
