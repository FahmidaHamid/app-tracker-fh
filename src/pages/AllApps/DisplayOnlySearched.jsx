import React from "react";
import Product from "../Product/Product";
import { Link, NavLink } from "react-router";
const DisplayOnlySearched = ({ itemsToDisplay }) => {
  console.log(itemsToDisplay);
  return (
    <>
      <div className="grid flex-1 sm:grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center">
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
