import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { withRouter } from "react-router-dom";
import MenuItem from "./MenuItem";

const Directory = (props) => {
  const { directory } = useContext(GlobalContext);

  return (
    <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {directory.map((category) => (
        <MenuItem key={category.id} category={category} props={props} />
      ))}
    </section>
  );
};

export default withRouter(Directory);
