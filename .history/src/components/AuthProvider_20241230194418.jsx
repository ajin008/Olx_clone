import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
    <AuthContext.Provider
      value={{ isAuthenticated, userDetails, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
