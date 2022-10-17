import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Think & Crispy", "Thick Crust"];
  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5, stiffness: 50 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          // If the selected state matches we flag to the `active` css class.
          let active = pizza.base === base ? "active" : "";
          // console.log(active);
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: "#fbd413", originX: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <span className={active}>{base}</span>
            </motion.li>
          );
        })}
      </ul>
      {/* We modify application state with the addBase callback handler that is
       passed down as a prop. Once selected, the below is flagged to truthy and
       we conditionally render more JSX, being our button to the next page. This
       means we can only continue to the next page, if we select state. */}
      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 1px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
