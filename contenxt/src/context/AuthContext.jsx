import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setAuthurized] = useState(false);

  const login = (userName, password) => {
    if (userName && password)
     {
      setAuthurized(true);
    }
  };

  const logout = () => {
    setAuthurized(false);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
