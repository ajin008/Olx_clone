import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const login = (details) =>{
    isAuthenticated()
  }
  return <div>AuthContext</div>;
};
