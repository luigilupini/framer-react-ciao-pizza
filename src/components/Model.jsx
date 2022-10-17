import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* # AnimatePresence: 
You can animate components when they're removed from the React tree. It allows
components to animate out when unmounted. `AnimatePresence` required to enable
`exit` animations because React lacks a lifecycle method that:

- Notifies components when they're going to be unmounted and...
- Allows them to defer that unmounting until the operation/animation is complete.

For more information see:
https://www.framer.com/docs/animate-presence/

- You need the child element that it wraps to be a `motion` tag.
- You need that child element to have a `exit` prop.

Modals are far simpler to setup with `AnimatePresence` than configuring it with
Routing to be aware of location.
```
*/
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } },
};

const Model = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>What to make another ciao pizza?</p>
            <Link to="/">
              <button onClick={() => setShowModal(!showModal)}>
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Model;
