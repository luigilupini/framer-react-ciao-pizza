import { motion } from "framer-motion";
import React from "react";

/* # Orchestration: 
By default, all animations will start simultaneously. But by using variants, we
gain access to extra transition props like `when`, `delayChildren`, and also the
`staggerChildren`, that let parents orchestrate execution of child animation.
https://www.framer.com/docs/animation/##orchestration

Taking advantage of variant's "transition orchestration" feature, we use the
`when` prop property `beforeChildren` that means our parent animation needs to
complete before any child can continue with its own animation. Simply put, we
run this before the children. After means, well, after the child animation.

Lastly we apply the `staggerChildren` prop to the parent so that it staggers the
animation to all children elements.
*/
const containerVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: "0",
    transition: {
      type: "spring",
      // spring specific settings:
      stiffness: 50,
      mass: 0.4,
      damping: 8,
      // ...
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="order container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping} style={{ paddingBottom: "0.5rem" }}>
            {topping}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
