import React from "react";
import StripeCheckout from "react-stripe-checkout";
function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J7N96CH8llqJB9dqp7u0xQvumQMaWlBjcaAJ25VAc0WG8SuO1GcDB0IUFUlagL4mWzzMrgLC6TSTNWSXAIsGm6C00EStrIgIR";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total amount is : $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
