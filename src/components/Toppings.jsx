import React from "react";
import { Link } from "react-router-dom";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "tomatoes",
    "mozzarella",
    "fresh-herbs",
    "mushrooms",
    "olives",
    "onions",
  ];
  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let active = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={active}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </div>
  );
};

export default Toppings;
