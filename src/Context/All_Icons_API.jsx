import { createContext, useContext, useMemo } from "react";
import { useFilterData } from "./FilterDataAndIconDataStorage";
import { SVGData } from "../SVGData";
const IconsStorage = createContext();

export const All_Icons_API_Provider = ({ children }) => {
  const svgData = SVGData;
  const { FilterDataAndIconData } = useFilterData();

  const filteredResult = useMemo(() => {
    if (Object.keys(FilterDataAndIconData).length === 0) {
      return svgData;
    }
    return svgData.filter((item) => {
      return Object.keys(FilterDataAndIconData).every((key) => {
        const filterValue = FilterDataAndIconData[key].toLowerCase();
        const iconValue = item[key].toLowerCase();

        // Checking if the filter property is 'name' tehn performing partial match
        if (key === "iconName") {
          console.log(key);
          return iconValue.includes(filterValue);
        }

        // For other properties, performing exact match
        return iconValue === filterValue;
      });
    });
  }, [FilterDataAndIconData, svgData]);

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
