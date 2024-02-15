import { createContext, useContext, useMemo, useState } from "react";
import { useFilterData } from "./FilterDataAndIconDataStorage";
import { SVGData } from "../SVGData";
const IconsStorage = createContext();

export const All_Icons_API_Provider = ({ children }) => {
  // const [AllIcons, setAllIcons] = useState({});
  const svgData = SVGData; // this will come from the database as an array of objects of icons and its details.
  const { FilterDataAndIconData } = useFilterData();
  const filteredResult = useMemo(() => {
    if (Object.keys(FilterDataAndIconData).length === 0) {
      return svgData;
    }
    return svgData.filter((item) =>
      Object.keys(FilterDataAndIconData).every(
        (key) => item[key] === FilterDataAndIconData[key]
      )
    );
  }, [FilterDataAndIconData, svgData]);

  // setAllIcons(filteredResult);
  const AllIcons = filteredResult;

  return (
    <IconsStorage.Provider value={{ AllIcons }}>
      {children}
    </IconsStorage.Provider>
  );
};

export const useAll_Icons_API = () => {
  const { AllIcons } = useContext(IconsStorage);
  return {
    AllIcons,
  };
};
