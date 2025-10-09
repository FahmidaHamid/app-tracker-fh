import React from "react";
import Product from "../Product/Product";

const BestProducts = ({ products }) => {
  //console.log(products);
  return (
    <div className="m-5 flex flex-1 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center m-3 p-4">Trending Apps</h1>
      <p className="text-xl m-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid flex-1 sm:grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center">
        {products.map((p) => (
          <Product key={p.id} aProduct={p} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
