import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};
const buttonVariants = {
  hover: {
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    scale: 1.1,
    transition: {
      yoyo: 10,
      duration: 0.3,
    },
  },
};

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
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let active = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, color: "#fbd413", originX: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <span className={active}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
