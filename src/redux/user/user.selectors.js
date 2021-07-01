import { createSelector } from "reselect";
const selectUser = (state) => {
  return state.user;
};
// const selectCart = (state) => state.cart;
export const selectCartHidden = createSelector();
export const selectCurrerntUser = createSelector(
  [
    selectUser,
    // selectCart
  ],
  (
    user
    // cart
  ) => {
    return user.currentUser;
  }
);
