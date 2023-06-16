import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  houseId: "",
  setHouseId: () => "",
  houses: [],
  setHouses: () => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [houseId, setHouseId] = useState("400");
  const [houses, setHouses] = useState([]);
  houses.sort((a, b) => {
    if (a.Prior === b.Prior) {
      if (a.Name < b.Name) return -1;
      if (a.Name > b.Name) return 1;
      return 0;
    }
    return a.Prior - b.Prior;
  });
  return (
    <GlobalContext.Provider value={{ houseId, setHouseId, houses, setHouses }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
