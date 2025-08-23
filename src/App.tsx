import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
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
import CatchAll from "./pages/CatchAll.tsx";
import { getVans } from "../api";
import { loader as vansLoader } from "./pages/Vans/Vans.tsx";
import Error from "./components/Error.tsx";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

interface Error {
  message: string;
  statusText: string;
  status: number;
}
export function loader() {
  return getVans();
}
function App() {
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout vans={vans} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
        <Route path="vans/:id" element={<VanDetails />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetailsLayout />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<CatchAll />} />
      </Route>
    )
  );
  return (
    <div className="w-[40%] mx-auto">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
