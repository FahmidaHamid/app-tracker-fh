import { useLoaderData } from "react-router";

import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import Banner from "./Banner";
import DisplayOnlySearched from "./DisplayOnlySearched";
import ResetSearch from "./ResetSearch";

const AllApps = () => {
  const data = useLoaderData();
  const [filteredAppList, setFilteredAppList] = useState(data);

  const onSearch = (value) => {
    console.log("input field clicked...", value);

    if ((value === "") | (value === "all")) {
      setFilteredAppList([...data]);
    } else {
      const filteredList = data.filter((d) =>
        d.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredAppList(filteredList);
    }
  };

  return (
    <>
      <div className="m-5 flex flex-1 flex-col items-center justify-center mt-10">
        <Banner />
        <div className="pt-10 pb-10 w-9/12">
          <div className="pt-5 pb-10 flex flex-1 flex-row items-center justify-between">
            <h1 className="text-3xl font-bold">
              Apps Found ({filteredAppList.length})
            </h1>
            <SearchBar onSearch={onSearch} />
          </div>
          <DisplayOnlySearched itemsToDisplay={filteredAppList} />
        </div>
      </div>
    </>
  );
};

export default AllApps;
