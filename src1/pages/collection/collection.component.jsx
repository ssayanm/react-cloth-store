import React, { useContext } from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import CollectionsContext from "../../contexts/collections/collections.context";
import { GlobalContext } from "../../providers/GlobalState";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const { collections } = useContext(GlobalContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

// import React, { useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";
// import CollectionItem from "../components/CollectionItem";

// const CollectionPage = ({ match }) => {
//   const { collections } = useContext(GlobalContext);
//   const collection = collections[match.params.collectionId];
//   const { title, items } = collection;

//   return (
//     <section className="container flex flex-wrap mb-4 w-full uppercase justify-center">
//       <div>
//         <h2 className="text-2xl m-3">{title}</h2>
//         <div className="flex flex-column">
//           <div className="grid grid-cols-4">
//             {items.map((item) => (
//               <CollectionItem key={item.id} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CollectionPage;
