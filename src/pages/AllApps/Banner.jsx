import React from "react";

const Banner = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center m-3 p-4">
        Explore All the Apps developed by{" "}
        <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Hero.IO{" "}
        </span>{" "}
        Team
      </h1>
      <p className="text-xl m-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
    </>
  );
};

export default Banner;
