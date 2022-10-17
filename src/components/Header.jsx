import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

/* Using the `type` prop: 
Set type to "tween" to use a duration-based tween animation.
If any non-orchestration transition values are set without a type property, this
is used as the default animation.
```jsx
<motion.path
  animate={{ pathLength: 1 }}
  transition={{ duration: 2, type: "tween" }}
/>
```
Set type to "spring" to animate using spring physics for natural movement.
Type is set to "spring" by default.
```jsx
<motion.div
  animate={{ rotate: 180 }}
  transition={{ type: 'spring' }}
/>
```
Set type to "keyframes" to animate using the keyframes animation.
Set to "tween" by default. Used to animate between a series of values.
Set type to animate using the inertia animation.
This can be used for natural deceleration, like momentum scrolling.
```jsx
<motion.div
  animate={{ rotate: 180 }}
  transition={{ type: "inertia", velocity: 50 }}
/>
```
Set type to false for an instant transition.
*/
const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};
const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};
/* Applying dragConstraints: 
Applies constraints on the permitted draggable area. It can accept an object of
optional top, left, right, bottom values, measured in pixels. This will define a
distance the named edge of the draggable component.

Alternatively, it can accept a `ref` to another component created with React's
`useRef` hook. This `ref` should/must be passed both to the draggable component
dragConstraints prop, and the `ref` of the component you want as a constraint.
*/
const Header = () => {
  return (
    <header>
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
        className="logo"
      >
        <motion.svg
          className="pizza-svg"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
      >
        <Link to="/">
          <h1>Ciao Pizza</h1>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
