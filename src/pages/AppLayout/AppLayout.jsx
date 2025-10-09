import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";

const AppLayout = () => {
  const navigation = useNavigation();

  return (
    // <SearchProvider>
    <div className="max-w-[100vw] mx-auto">
      <Header />
      {navigation.state !== "idle" && <Loading />}
      <Outlet />
      <Footer />
    </div>
    // </SearchProvider>
  );
};

export default AppLayout;
