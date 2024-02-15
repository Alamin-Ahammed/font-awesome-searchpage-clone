import { createContext, useContext, useState } from "react";

const Reset = createContext();

export const ResetAllProvider = ({ children }) => {
  const [isContextResetClicked, setIsContextResetClicked] = useState(false);
  return (
    <Reset.Provider value={{ isContextResetClicked, setIsContextResetClicked }}>
      {children}
    </Reset.Provider>
  );
};

export const useResetProvider = () => {
  const { isContextResetClicked, setIsContextResetClicked } = useContext(Reset);
  return { isContextResetClicked, setIsContextResetClicked };
};
