import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [formDB, setFormDB] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const context = {
    formDB,
    setFormDB,
    isLoading,
    setIsLoading,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
