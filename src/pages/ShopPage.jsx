import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CategoryCardComponent from "../components/CategoryCardComponent";

const ShopPage = () => {
  const { products, getProducts } = useContext(GlobalContext);

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {products.map((product) =>
        Object.values(product).map((item) => (
          <CategoryCardComponent category={item} key={item.id} />
        ))
      )}
    </section>
  );
};

export default ShopPage;
