import React, { createContext, useContext, useState } from "react";
import { db } from "@/firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

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
  filteredHouses: [],
  setFilteredHouses: () => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [houseId, setHouseId] = useState(null);

  const housesCollectionRef = collection(db, "Houses");
  const [houses, setHouses] = useState([]);
  const [filterTerm, setFilterTerm] = useState([]);
  const [minMax, setMinMax] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [guestsAmount, setGuestsAmount] = useState(1);

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
