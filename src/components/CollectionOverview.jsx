import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import CollectionPreview from "../components/CollectionPreview";

const CollectionsOverview = () => {
  const { collections } = useContext(GlobalContext);
  // const newcollections = Object.keys(collections).map(
  //   (key) => collections[key]
  // );

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {Object.values(collections).map((item) => (
        <CollectionPreview item={item} key={item.id} />
      ))}
    </section>
  );
};

export default CollectionsOverview;
