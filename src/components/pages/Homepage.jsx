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
      {collections.map((collection, key) => (
        <HomeCardComponent key={key} collection={collection} />
      ))}
    </main>
  );
};

export default Homepage;
