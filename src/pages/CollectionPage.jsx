import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CollectionItem from "../components/CollectionItem";

const CollectionPage = () => {
  const { collections, getCollections } = useContext(GlobalContext);

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {collections.map((collection) =>
        Object.values(collection).map((category) => (
          <div key={category.id}>
            <h2 className="text-2xl m-3">{category.title}</h2>
            <div className="flex flex-column">
              <div className="grid grid-cols-4">
                {category.items.map((item) => (
                  <CollectionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default CollectionPage;
