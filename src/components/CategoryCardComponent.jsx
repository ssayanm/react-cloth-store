import React from "react";
import ProductCardComponent from "./ProductCardComponent";
// import { GlobalContext } from "../context/GlobalState";

const CategoryCardComponent = ({ category }) => {
  // const { collections, getCollections } = useContext(GlobalContext);
  // const { title, items } = product;

  return (
    <section>
      <h2>{category.title}</h2>
      {category.items.map((product) => (
        <ProductCardComponent product={product} />
      ))}
    </section>
  );
};

export default CategoryCardComponent;
