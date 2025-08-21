import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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
const Layout = ({ vans }: Props) => {
  return (
    <>
      <Header />
      <Outlet context={{vans}} />
      <Footer />
    </>
  );
};

export default Layout;
