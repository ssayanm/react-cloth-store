import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import HomeCardComponent from "../HomeCardComponent";

const Homepage = () => {
  const { collections, getCollections } = useContext(GlobalContext);

  // useEffect(() => {
  //   getCollections();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <main className="">
      {collections.map((collection) =>
        collection.map((category) => (
          <div key={category.id} className="">
            <HomeCardComponent key={category.id} collection={category} />
          </div>
        ))
      )}
    </main>
  );
};

export default Homepage;
