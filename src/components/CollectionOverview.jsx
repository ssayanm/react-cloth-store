import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import CollectionPreview from "../components/CollectionPreview";

const CollectionsOverview = () => {
  const { collections, getCollections } = useContext(GlobalContext);

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {collections.map((product) =>
        Object.values(product).map((item) => (
          <CollectionPreview item={item} key={item.id} />
        ))
      )}
    </section>
  );
};

export default CollectionsOverview;
