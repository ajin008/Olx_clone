import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Details = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      <Navbar />

      <div>
        <div className="w-full md:w-1/2">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
