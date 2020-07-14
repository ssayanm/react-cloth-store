import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CollectionItem from "../components/CollectionItem";

const CollectionPage = ({ match }) => {
  const { collections } = useContext(GlobalContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      <div>
        <h2 className="text-2xl m-3">{title}</h2>
        <div className="flex flex-column">
          <div className="grid grid-cols-4">
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;
