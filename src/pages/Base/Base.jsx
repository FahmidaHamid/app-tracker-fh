import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

const Base = () => {
  return (
    <div className="flex flex-col mx-auto mx-w-[100vw]">
      <Header />

      <div className="min-h-[640px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Base;
