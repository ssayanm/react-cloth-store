import React from "react";

const HomeCardComponent = ({ collection }) => {
  return (
    <div className="m-3 max-w-sm rounded shadow-lg text-center">
      <img
        className="w-full h-64"
        src={collection.imageUrl}
        alt="collections"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{collection.category}</div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HomeCardComponent;
