import React from "react";
import CollectionPreview from "../preview-collection/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";
function CollectionsOverview({ collections }) {
  console.log("😁😁😁");
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
