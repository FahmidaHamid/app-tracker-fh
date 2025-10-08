import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

const Base = () => {
  return (
    <div className="max-w-[100vw] mx-auto">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Base;
