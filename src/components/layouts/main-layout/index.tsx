import { Outlet } from "react-router-dom";
import Footer from "../../footer";
import Navbar from "../../navbar";

interface IProps {}

const MainLayout: React.FC<IProps> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
