import React, { useEffect } from "react";
import { motion } from "framer-motion";

/* # Orchestration: 
By default, all animations will start simultaneously. But by using variants, we
gain access to extra transition props like `when`, `delayChildren`, and also the
`staggerChildren`, that let parents orchestrate execution of child animation.
https://www.framer.com/docs/animation/##orchestration

Taking advantage of variant's transition orchestration "timing-relationships",
we use the `when` prop's `beforeChildren` value that means our parent animation
needs to complete before any child can continue, with its own animation. Simply
we run before the children. After means, well, after the child animation.

Lastly we apply the `staggerChildren` prop to the parent so that it staggers the
animation to all children elements.
*/
const containerVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: "0",
    opacity: 1,
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
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);
  return (
    <motion.div
      className="order container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
