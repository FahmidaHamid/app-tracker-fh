import Product from "../Product/Product";
import { Link, useLocation } from "react-router";

const DisplayOnlySearched = ({ itemsToDisplay }) => {
  const location = useLocation();

  if (itemsToDisplay.length == 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-5xl p-10 text-center">No Apps Found ...</h1>

        <Link to="" state={{ from: location.pathname }}>
          <button
            // onClick={() => navigate(0)}
             
            className="btn bg-purple-300 text-black hover:bg-purple-700 hover:text-white"
          >
            Go Back
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid flex-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
        {itemsToDisplay.map((p) => (
          <Product key={p.id} aProduct={p} />
        ))}
      </div>
    </>
  );
};

export default DisplayOnlySearched;
