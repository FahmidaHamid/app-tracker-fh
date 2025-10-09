import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Header from "../../components/Header/Header";
import { SearchProvider } from "../../components/SearchContext/SearchContext";
import Loading from "../../components/Loading/Loading";

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;
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

export default AppLayout;
