import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import { SearchProvider } from "../../components/SearchContext/SearchContext";
const Base = () => {
  return (
    <SearchProvider>
      <div className="max-w-[100vw] mx-auto">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </SearchProvider>
  );
};

export default Base;
