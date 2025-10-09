import React from "react";
import Hero from "./Hero";
import Bandana from "./Bandana";
import { NavLink, useLoaderData } from "react-router";
import BestProducts from "./BestProducts";

const Home = () => {
  const products = useLoaderData();
  //console.log(products);
  return (
    <>
      <Hero />
      <Bandana />
      <BestProducts products={products} />
      <div className="flex flex-1 items-center justify-center p-4">
        <NavLink to="all-apps">
          <button className="btn btn-accent bg-purple-200 text-2xl p-5">
            Show All of our Apps
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
