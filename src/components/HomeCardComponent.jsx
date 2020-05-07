import React from "react";

const HomeCardComponent = ({ collection }) => {
  return (
    <div className="container">
      <div className="w-1/4 m-3">
        <div className="max-w-sm rounded shadow-lg text-center">
          <img
            className="w-full"
            src="https://i.ibb.co/ZYW3VTp/brown-brim.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{collection.category}</div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardComponent;
