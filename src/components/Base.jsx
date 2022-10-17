import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

/* Introducing `variants` 🧬: 
Use variants, which make it a bit easier to define more complex animations.

They provide the following advantages:
1) We get to extract our initial & animate object(s) into a single outside one.
We can then reference this outside variant, keeping our JSX code cleaner. 2) We
can then propagate these variant(s) or changes to them, throughout the DOM tree
resulting in cleaner code also. 3) Variants allow timing-relationships** between
parent, and their directly/enclosed children `motion` elements.

* The best benefit is the propagation down the DOM. A parent `motion` element
* with initial & animate props, those attributes and properties are passed down
* to any children `motion` elements, it encloses/wraps over. Its important to
* keep the key-value pair names consistent between variants.

- hidden (enter/from/start) : represents the initial prop.
- visible (leave/to/end) : represents the animate prop.
- transition : we apply this to the entering or leaving state.

You don't need to apply the `transition` prop to a motion element, its embedded.
*/
const containerVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: "0",
    transition: { type: "spring", delay: 0.5, stiffness: 50 },
  },
};
const nextVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Think & Crispy", "Thick Crust"];
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
        <motion.div className="next" variants={nextVariants}>
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
