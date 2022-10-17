import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import Loader from "./Loader";

/* # Keyframes: 🎞️
Variants also allow us to setup our `animate` prop to execute in a set/series
of keyframes. This animates through each value in rather a sequence.
https://www.framer.com/docs/animation/##keyframes
Below we are using `yoyo` within our transition that keyframes our original
state of the element being 1 before we apply any hover scaling. We can rather
well simply put "yoyo" back-and-forth between our state of 1 to 1.1 (x10).
*/
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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1.25 } },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome ragazzi :)</h2>
      <Link to="/base">
        {/* Properties to animate to while the hover gesture is recognized. */}
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
