import React from "react";

const CollectionPreview = ({ category }) => {
  return (
    <section>
      <h2 className="text-2xl m-3">{category.title}</h2>
      <div className="flex flex-column"></div>
    </section>
  );
};

export default CollectionPreview;
