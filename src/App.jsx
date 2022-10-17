import { useState } from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

import { AnimatePresence } from "framer-motion";

/* # AnimatePresence: 
You can animate components when they're removed from the React tree. It allows
components to animate out when unmounted. `AnimatePresence` required to enable
`exit` animations because React lacks a lifecycle method that:
- Notifies components when they're going to be unmounted and...
- Allows them to defer that unmounting until the operation/animation is complete.

For more information see:
https://www.framer.com/docs/animate-presence/

Without it, you have animation when a page/component renders (mounts) from a
the <Switch /> when it matches the url path condition. But what if we want these
components when they (unmount) being `exit`, to animate. Well, then you have to
wrap the Routing components that are handling those mount and unmount tasks with
framers `AnimatePresence` component. It has the following requirements:

- You need the child element that it wraps to be a `motion` tag.
- You need that child element to have a `exit` prop.
- However, an additional step for our <Switch /> component is needed

We need a way for `AnimatePresence` to know when the route is going to change.
When is it going to apply `exit` animation. To get location information you can
use the `useLocation` hook from `react-router-dom`. Then pass these as props to
<Switch />: `location={location}` and `key={location.key}` so that it has now
location in a controlled state. AnimatePresence will now know when a route has
any change occurring to perform the exit for unmounting components.

- Next, apply exit variants and props to your child components like (Home).
```js
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1.25 } },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};
```
*/

function App() {
  // Component state object
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const location = useLocation();
  console.log(location);
  // helper callback functions:
  const addBase = (base) => setPizza({ ...pizza, base });
  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      // If it has not been added yet:
      newToppings = [...pizza.toppings, topping];
    } else {
      // If it has already been added (filter duplicates):
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    // Here we return a new object (no mutation)
    setPizza({ ...pizza, toppings: newToppings });
  };
  console.log(pizza); // toggle to see updates to state
  // Below we register the needed routes:
  return (
    <div>
      <Header />
      <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/base" exact>
            <Base pizza={pizza} addBase={addBase} />
          </Route>
          <Route path="/toppings" exact>
            <Toppings pizza={pizza} addTopping={addTopping} />
          </Route>
          <Route path="/order" exact>
            <Order pizza={pizza} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
