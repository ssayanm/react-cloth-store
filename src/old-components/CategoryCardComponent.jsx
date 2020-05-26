import React from "react";
import ProductCardComponent from "./ProductCardComponent";
//import { GlobalContext } from "../context/GlobalState";

const CategoryCardComponent = ({ category }) => {
  // const { collections, getCollections } = useContext(GlobalContext);
  // const { title, items } = product;

  return (
    <section>
      <h2 className="text-2xl m-3">{category.title}</h2>
      <div className="flex flex-column">
        <div className="grid grid-cols-4">
          {category.items
            .filter((item, index) => index < 4)
            .map((product) => (
              <ProductCardComponent product={product} key={product.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCardComponent;