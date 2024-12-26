import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Details = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div c>
      <Navbar />
      
    </div>
  );
};

export default Details;
