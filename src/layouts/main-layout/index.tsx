import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../shared";

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
