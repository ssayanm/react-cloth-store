import React from "react";
import CollectionItem from "../components/CollectionItem";

const CollectionPreview = ({ item }) => {
  const { title, items } = item;
  return (
    <section>
      <h2 className="text-2xl m-3">{title}</h2>
      <div className="flex flex-column">
        <div className="grid grid-cols-4">
          {items
            .filter((item, index) => index < 4)
            .map((item) => (
              <CollectionItem item={item} key={item.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;
