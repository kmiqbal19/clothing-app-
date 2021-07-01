import React from "react";
import CollectionItem from "../../components/collection-items/collection-items.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";
function CollectionPage({ collection }) {
  // console.log(match.params.collectionId);
  // console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};
export default connect(mapStateToProps)(CollectionPage);
