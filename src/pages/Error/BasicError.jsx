import pageNotFound from "../../assets/App-Error.png";
import { useNavigate, useRouteError } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const BasicError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  //console.log(error);
  return (
    <>
      <Header />
      <div className="h-[5/12]">
        <div className="flex flex-col items-center p-20">
          <h1 className="text-7xl font-extrabold text-purple-500">
            {error.status} Error
          </h1>
          <h1 className="text-4xl font-extrabold text-red-500">
            Sorry! An unexpected error has occured
          </h1>
          {/* <p>{error.statusText || error.message}</p> */}
          <figure>
            <img src={pageNotFound} alt="" />
          </figure>
          <div className="p-10">
            <button
              onClick={() => navigate(-1)}
              className="btn bg-purple-300 text-black hover:bg-purple-600 hover:text-white"
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BasicError;
