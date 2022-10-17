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

const Header = () => {
  return (
    <header>
      <div className="logo">
        <svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </svg>
      </div>
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
