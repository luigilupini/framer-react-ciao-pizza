import React from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Think & Crispy", "Thick Crust"];
  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          // If the selected state matches we flag to the `active` css class.
          let active = pizza.base === base ? "active" : "";
          // console.log(active);
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={active}>{base}</span>
            </li>
          );
        })}
      </ul>
      {/* We modify application state with the addBase callback handler that is
       passed down as a prop. Once selected, the below is flagged to truthy and
       we conditionally render more JSX, being our button to the next page. This
       means we can only continue to the next page, if we select state. */}
      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
