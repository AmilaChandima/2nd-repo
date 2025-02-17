import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [showLogin, setShowLogin] = useState(false);
  const [formType, setFormType] = useState("Login");
  const url = "http://localhost:4000"
  const [token, setToken] = useState("");
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  }
  ,[])
  const contextValue = {
    url,
    token,
    setToken,
    showLogin,
    setShowLogin,
    formType,
    setFormType

  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
