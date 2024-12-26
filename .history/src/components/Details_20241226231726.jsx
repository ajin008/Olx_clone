import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Details = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-3xl font-bold">₹{data.price}</h1>
            <p className="text-gray-500 mt-2">{data.title}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Category: </span>
                {data.category}
              </div>
              <div>
                <span className="font-semibold">Location: </span>
                {data.location || "Not specified"}
              </div>
              <div>
                <span className="font-semibold">Description: </span>
                <p className="mt-2 text-gray-600">{data.description}</p>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-4">
            <button className="w-1/2 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
              Call Seller
            </button>
            <button className="w-1/2 border border-green-500 text-green-500 p-3 rounded-lg hover:bg-green-50">
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
