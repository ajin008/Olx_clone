import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Details = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 mt-10 border border-spacing-1">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>

        <div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-3xl font-bold">₹{data.price}</h1>
            <p className="text-gray-500 mt-2">{data.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
