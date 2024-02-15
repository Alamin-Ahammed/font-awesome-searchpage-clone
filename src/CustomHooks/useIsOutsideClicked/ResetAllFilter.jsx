import { useEffect } from "react";
import { useFilterData } from "../../Context/FilterDataAndIconDataStorage";

export const ResetAll = (callback) => {
  const { isResetClicked, setIsResetClicked } = useFilterData();
  // resetting all the filter in this page was clicked
  useEffect(() => {
    callback();
    setIsResetClicked(false);
  }, [isResetClicked, setIsResetClicked]);
};
