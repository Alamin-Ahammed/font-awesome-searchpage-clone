import { useEffect } from "react";
import { useFilterData } from "../../Context/FilterDataAndIconDataStorage";
import { useResetProvider } from "../../Context/ResetButton";

export const ResetAll = (callback) => {
  const { isContextResetClicked,setIsContextResetClicked } = useResetProvider();
  const { isResetClicked, setIsResetClicked } = useFilterData();
  // resetting all the filter in this page was clicked
  useEffect(() => {
    callback();
    setIsResetClicked(false);
    setIsContextResetClicked(false)
  }, [isResetClicked, setIsResetClicked,isContextResetClicked,setIsContextResetClicked]);
};
