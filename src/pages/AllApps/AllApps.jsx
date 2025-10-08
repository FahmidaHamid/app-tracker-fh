import React from "react";
import { useLoaderData } from "react-router";
import { CiSearch } from "react-icons/ci";
import Product from "../Product/Product";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";

const AllApps = () => {
  const data = useLoaderData();
  const [searchT, setSearchT] = useState(false);
  const [filteredAppList, setFilteredAppList] = useState([]);

  const onSearch = (value) => {
    console.log("input field clicked...", value);
    setSearchT(true);
    if (value.length !== 0) {
      const filteredList = data.filter((d) =>
        d.title.toLowerCase().includes(value.toLowerCase())
      );
      console.log(filteredList);
      setFilteredAppList(filteredList);
    }
  };

  return (
    <>
      <div className="m-5 flex flex-1 flex-col items-center justify-center mt-10">
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
        <div className="pt-10 pb-10">
          <div className="pt-5 pb-10 flex flex-1 flex-row items-center justify-between">
            <h1 className="text-3xl font-bold">
              Apps Found ({searchT ? filteredAppList.length : data.length})
            </h1>
            <SearchBar onSearch={onSearch}></SearchBar>
            {/* <input
              type="text"
              onClick={handleClick}
              placeholder={<CiSearch />}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "2px solid #ccc",
              }}
            /> */}
          </div>
          <div className="grid flex-1 sm:grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center">
            {!searchT &&
              data.map((p, index) => <Product key={index} aProduct={p} />)}
            {searchT &&
              filteredAppList.map((p, index) => (
                <Product key={index} aProduct={p} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllApps;
