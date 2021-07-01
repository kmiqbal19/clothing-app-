import { createSelector } from "reselect";
import memoize from "lodash.memoize";
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };
const selectShop = (state) => state.shop;
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    return collections[collectionUrlParam];
  })
);
// console.log("😋😋😋😋😋😋😋😋😋");
// console.log(COLLECTION_ID_MAP["womens"]);
// collections.find((collection) => {
//   return collection.id === COLLECTION_ID_MAP[collectionUrlParam];
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
