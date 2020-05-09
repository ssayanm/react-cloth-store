import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ShopCardComponent from "../components/ShopCardComponent";

const ShopPage = () => {
  const { products, getProducts } = useContext(GlobalContext);

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {console.log(products)}
      {products.map((product) => console.log(product))}
    </section>
  );
};

export default ShopPage;
