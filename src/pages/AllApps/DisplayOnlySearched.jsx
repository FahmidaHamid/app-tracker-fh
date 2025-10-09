import Product from "../Product/Product";
import { useNavigate } from "react-router";

const DisplayOnlySearched = ({ itemsToDisplay }) => {
  //console.log(itemsToDisplay);
  const navigate = useNavigate();
  if (itemsToDisplay.length == 0) {
    return (
      <>
        <h1 className="text-5xl p-10 text-center">No Apps Found ...</h1>

        <button
          onClick={() => navigate(0)}
          className="btn bg-purple-300 text-black hover:bg-purple-700 hover:text-white"
        >
          Go Back
        </button>
      </>
    );
  }

  return (
    <>
      <div className="grid flex-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
        {itemsToDisplay.map((p) => (
          // <NavLink to={`/detailed-app/${p.id}`}>
          <Product key={p.id} aProduct={p} />
          // </NavLink>
        ))}
      </div>
    </>
  );
};

export default DisplayOnlySearched;
