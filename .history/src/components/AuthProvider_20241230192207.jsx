import React, { createContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = () => {

  const[isAuthenticated,setIsAuthenticated] = useState()
  return (
    <div>AuthContext</div>
  )
}
