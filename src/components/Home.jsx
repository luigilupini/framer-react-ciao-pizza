import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
// Our initial starting/entering (from) animation
const start = { opacity: 0 };
// We animate (to) the ending/leaving animation
const end = { opacity: 1 };
// Lastly transition attribute options:
const options = { delay: 1, duration: 1.25 };

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={start}
      animate={end}
      transition={options}
    >
      <h2>Welcome ragazzi :)</h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </motion.div>
  );
};

export default Home;
