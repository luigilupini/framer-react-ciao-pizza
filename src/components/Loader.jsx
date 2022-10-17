import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  frameOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  frameTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

/* useCycle hook 🪝: 
Cycles through a series of visual properties. Can be used to toggle between or
cycle through animations. It works similar to useState in React. It's provided
an initial array of possible states, and returns an array of two arguments. An
index can be passed to the returned cycle function to cycle a specific index.
The hook takes the above two variants we wish to cycle through as arguments.
*/
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("frameOne", "frameTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div style={{ cursor: "pointer" }} onClick={() => cycleAnimation()}>
        Cycle Loader
      </div>
    </>
  );
};

export default Loader;
