import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  houseId: "", // because we can only mark 1 house on navbar,
  // filterTerm and houseId may have same values, but
  // depending on the conditions, only one of them will be used
  setHouseId: () => "",
  houses: [],
  setHouses: () => [],
  filterTerm: [],
  setFilterTerm: () => [],
  minMax: [],
  setMinMax: () => [],
  searchTerm: "",
  setSearchTerm: () => "",
  guestsAmount: "",
  setGuestsAmount: () => "",
});

export const GlobalContextProvider = ({ children }) => {
  const [houseId, setHouseId] = useState(null);
  const [houses, setHouses] = useState([]);
  const [filterTerm, setFilterTerm] = useState([]);
  const [minMax, setMinMax] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [guestsAmount, setGuestsAmount] = useState(1);
  houses.sort((a, b) => {
    if (a.Prior === b.Prior) {
      if (a.Name < b.Name) return -1;
      if (a.Name > b.Name) return 1;
      return 0;
    }
    return a.Prior - b.Prior;
  });
  return (
    <GlobalContext.Provider
      value={{
        houseId,
        setHouseId,
        houses,
        setHouses,
        filterTerm,
        setFilterTerm,
        minMax,
        setMinMax,
        searchTerm,
        setSearchTerm,
        guestsAmount,
        setGuestsAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
