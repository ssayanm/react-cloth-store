import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import HomeCardComponent from "../components/HomeCardComponent";

const HomePage = (props) => {
  const { categories, getCategories } = useContext(GlobalContext);

  // useEffect(() => {
  //   getCollections();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {categories.map((items) =>
        items.sections.map((category) => (
          <HomeCardComponent
            key={category.id}
            category={category}
            props={props}
          />
        ))
      )}
    </section>
  );
};

export default HomePage;
