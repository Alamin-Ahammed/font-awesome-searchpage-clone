import { createContext, useContext, useState } from "react";

const ViewStyle = createContext();

export const ViewStyleProvider = ({ children }) => {
  const [viewStyle, setViewStyle] = useState('Roomy');
  console.log(viewStyle)
  return (
    <ViewStyle.Provider value={{ viewStyle, setViewStyle }}>
      {children}
    </ViewStyle.Provider>
  );
};

export const useViewStyle = () => {
  const { viewStyle, setViewStyle } = useContext(ViewStyle);
  return { viewStyle, setViewStyle };
};
