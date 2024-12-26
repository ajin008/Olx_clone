import React from "react";
import { Link } from "react-router-dom";

export const Home = (props) => {
  return (
    <div className="">
      {props.products.map((data, index) => {
        return (
          <Link key={index} to="/details" state={{ data: data }}>
            <div className="border border-spacing-1 p-2 ml-3 mt-3">
              <img src={data.image} alt="" className="w-60 h-48" />
              <h1 className="font-bold">Rs{data.price}</h1>
              <h1>{data.title}</h1>
              <h1>{data.category}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
