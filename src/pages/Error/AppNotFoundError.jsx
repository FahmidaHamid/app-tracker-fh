import React from "react";
import { useRouteError, useNavigate } from "react-router";
import appNotFound from "../../assets/App-Error.png";
const AppNotFoundError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <>
        {/* <Header /> */}
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
              <img src={appNotFound} alt="" />
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

        {/* <Footer /> */}
      </>
    </div>
  );
};

export default AppNotFoundError;
