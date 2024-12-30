import React, { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const login = (details) => {
    setIsAuthenticated(true);
    setUserDetails(details);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserDetails(null);
  };
  return (
    <AuthContext.Provider value={(isAuthenticated, userDetails, login, logout)}>
      {Children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
