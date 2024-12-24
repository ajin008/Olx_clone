import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { MenuBar } from "./MenuBar";
import { Home } from "./Home";
import { Footer } from "./Footer";

export const Main = () => {
  const [prod, setProd] = useState([]);
  const [search, setSearch] = useState("");

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProd(json));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <MenuBar />
      <Home products={prod} search={search}/>
      <Footer />
    </div>
  );
};
