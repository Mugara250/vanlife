import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans.tsx";
import "../server";
import VanDetails from "./pages/Vans/VanDetails.tsx";
import Layout from "./components/Layout";
import Dashboard from "./pages/Hosts/Dashboard/Dashboard.tsx";
import Income from "./pages/Hosts/Income/Income.tsx";
import Reviews from "./pages/Hosts/Reviews/Reviews.tsx";
import HostLayout from "./components/HostLayout.tsx";
import { useEffect, useState } from "react";
import HostVans from "./pages/Hosts/HostVans/HostVans.tsx";
import HostVanDetailsLayout from "./components/HostVanDetailsLayout.tsx";
import Details from "./pages/Hosts/HostVans/Details/Details.tsx";
import Pricing from "./pages/Hosts/HostVans/Pricing/Pricing.tsx";
import Photos from "./pages/Hosts/HostVans/Photos/Photos.tsx";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

function App() {
  const [vans, setVans] = useState<Van[]>([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-[40%] mx-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard vans={vans} />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans vans={vans} />} />
            <Route path="vans/:id" element={<HostVanDetailsLayout vans={vans} />}>
              <Route index element={<Details vans={vans} />} />
              <Route path="pricing" element={<Pricing vans={vans} />} />
              <Route path="photos" element={<Photos vans={vans} />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
