import React from "react";

const Order = ({ pizza }) => {
  return (
    <div className="order container">
      <h2>Thank you for your order</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping} style={{ paddingBottom: "0.5rem" }}>
          {topping}
        </div>
      ))}
    </div>
  );
};

export default Order;
