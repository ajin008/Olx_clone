import React from "react";
import { useLocation } from "react-router-dom";

export const Details = () => {
  const location = useLocation();
  return (
    <div className="flex p-4">
      <img src={location.state.data.image} alt="" />
      <div>
        <h1 className="font-bold text-3xl">Rs{location.state.data.price}</h1>
        <h1 className="mt-5">
          <span className="font-semibold">Category</span>:
          {location.state.data.category}
        </h1>
        <h1 className="mt-5">
          <span className="font-semibold">Title</span>:
          {location.state.data.title}
        </h1>
        <h1 className="mt-5">
          <span className="font-semibold">Description</span>:
          {location.state.data.description}
        </h1>
      </div>
    </div>
  );
};
