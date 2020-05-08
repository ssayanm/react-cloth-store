import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import HomeCardComponent from "../components/HomeCardComponent";

const HomePage = () => {
  const { collections, getCollections } = useContext(GlobalContext);

  // useEffect(() => {
  //   getCollections();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {collections.map((collection) =>
        collection.map((category) => (
          <HomeCardComponent key={category.id} collection={category} />
        ))
      )}
    </section>
  );
};

export default HomePage;
