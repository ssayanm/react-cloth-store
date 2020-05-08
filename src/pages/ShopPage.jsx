import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ShopCardComponent from "../components/ShopCardComponent";

const ShopPage = () => {
  const { collections, getCollections } = useContext(GlobalContext);

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {collections.map((collection) =>
        collection.map((product) =>
          product.products.map((product) => (
            <ShopCardComponent key={product.id} product={product} />
          ))
        )
      )}
    </section>
  );
};

export default ShopPage;
