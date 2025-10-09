import React from "react";
import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const resetSearch = () => {
    setSearchValue("");
  };

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, resetSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => {
  return useContext(SearchContext);
};
