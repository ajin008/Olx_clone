import React from "react";
import { replace, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Phone } from "lucide-react";
import { Footer } from "./Footer";

export const Details = () => {
  const location = useLocation();
  const { data } = location.state;
  const navigate = useNavigate();

  if (!data) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 space-y-4 mt-10">
          <div className="border border-spacing-1">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[400px] object-contain rounded-lg "
            />
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
        </div>

        <div className="w-full md:w-1/2 space-y-4 mt-10">
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-3xl font-bold">₹{data.price}</h1>
            <p className="text-gray-500 mt-2">{data.title}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <button className="flex items-center gap-4">
              <span className="flex items-center">Call us</span>
              <Phone />
            </button>
          </div>
        </div>
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default Details;
