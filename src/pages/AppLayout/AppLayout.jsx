import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Header from "../../components/Header/Header";
import { SearchProvider } from "../../components/SearchContext/SearchContext";
import Loading from "../../components/Loading/Loading";

const AppLayout = () => {
  const navigation = useNavigation();

  return (
    // <SearchProvider>
    <div className="max-w-[100vw] mx-auto">
      <Header />
      {navigation.state === "loading" && <Loading />}
      <Outlet />
      <Footer />
    </div>
    // </SearchProvider>
  );
};

export default AppLayout;
