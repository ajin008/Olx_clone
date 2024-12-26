import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Details = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="grid grid-cols-4 p-5">
      <Navbar />
    </div>
  );
};

export default Details;
