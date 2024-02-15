import { createContext, useContext, useState } from "react";

const Storage = createContext();

export const FilterDataAndIconDataStorageProvider = ({ children }) => {
  
  const [FilterDataAndIconData, setFilterDataAndIconData] = useState({});
  const [isResetClicked, setIsResetClicked] = useState(false);
  return (
    <Storage.Provider
      value={{
        FilterDataAndIconData,
        setFilterDataAndIconData,
        isResetClicked,
        setIsResetClicked,
      }}
    >
      {children}
    </Storage.Provider>
  );
};

export const useFilterData = () => {
  const {
    FilterDataAndIconData,
    setFilterDataAndIconData,
    isResetClicked,
    setIsResetClicked,
  } = useContext(Storage);
  return {
    FilterDataAndIconData,
    setFilterDataAndIconData,
    isResetClicked,
    setIsResetClicked,
  };
};
