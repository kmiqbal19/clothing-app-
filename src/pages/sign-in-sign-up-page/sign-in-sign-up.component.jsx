import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.components";
import "./sign-in-and-sign-up.styles.scss";

function SignInAndSignUpPage() {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUpPage;
