import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getVans } from "../../api";

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
export function loader() {
  return getVans();
}

const Layout = () => {
  const vans = useLoaderData<Props>();
  return (
    <>
      <Header />
      <Outlet context={{vans}} />
      <Footer />
    </>
  );
};

export default Layout;
