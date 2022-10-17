import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

// # Keyframes: 🎞️
// Variants also allow us to setup our `animate` prop to execute in a set/series
// of keyframes. This animates through each value in rather a sequence.
// https://www.framer.com/docs/animation/##keyframes
const buttonVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1], // represents keyframes :)
    textShadow: "0px 0px 1px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.25 }}
    >
      <h2>Welcome ragazzi :)</h2>
      <Link to="/base">
        {/* Properties to animate to while the hover gesture is recognized. */}
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
