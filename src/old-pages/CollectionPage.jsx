import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import CollectionItem from "../components/CollectionItem";

const CollectionPage = () => {
  const { products, getProducts } = useContext(GlobalContext);
  const { title, items } = products;
  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      <h2>{title}</h2>
      {items.map((item) => (
        <CollectionItem item={item} key={item.id} />
      ))}
    </section>
  );
};

export default CollectionPage;
