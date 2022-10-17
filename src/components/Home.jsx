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
        {/* Properties to animate to while the hover gesture is recognised. */}
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 1px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
