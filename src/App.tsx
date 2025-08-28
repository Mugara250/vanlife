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
import HostVans from "./pages/Hosts/HostVans/HostVans.tsx";
import HostVanDetailsLayout from "./components/HostVanDetailsLayout.tsx";
import Details from "./pages/Hosts/HostVans/Details/Details.tsx";
import Pricing from "./pages/Hosts/HostVans/Pricing/Pricing.tsx";
import Photos from "./pages/Hosts/HostVans/Photos/Photos.tsx";
import CatchAll from "./pages/CatchAll.tsx";
import { loader as vansLoader } from "./pages/Vans/Vans.tsx";
import { loader as vanDetailsLoader } from "./pages/Vans/VanDetails.tsx";
import Error from "./components/Error.tsx";
import Login from "./pages/Login.tsx";
import { requireAuth } from "../utils.ts";
import { loader as loginLoader, action as loginAction } from "./pages/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetails />}
          loader={vanDetailsLoader}
          errorElement={<Error />}
        />
        <Route
          path="host"
          element={<HostLayout />}
          loader={async ({ request }) => await requireAuth(request)}
        >
          <Route
            index
            element={<Dashboard />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="vans"
            element={<HostVans />}
            loader={async ({ request }) => await requireAuth(request)}
            errorElement={<Error />}
          />
          <Route
            path="vans/:id"
            element={<HostVanDetailsLayout />}
            loader={async ({ request }) => await requireAuth(request)}
            errorElement={<Error />}
          >
            <Route
              index
              element={<Details />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route
              path="pricing"
              element={<Pricing />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route
              path="photos"
              element={<Photos />}
              loader={async ({ request }) => await requireAuth(request)}
            />
          </Route>
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>

        <Route
          path="login"
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />
        <Route path="*" element={<CatchAll />} />
      </Route>
    )
  );
  return (
    <div className="w-[40%] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
