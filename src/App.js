import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header.component/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up.component";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrerntUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubcribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // console.log("userAuth", userAuth);
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef);
        userRef.onSnapshot((snapShot) => {
          return setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },

            () => {
              console.log(this.state);
            }
          );
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrerntUser,
});

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
