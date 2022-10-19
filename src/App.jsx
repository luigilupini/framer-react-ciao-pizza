import { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Model from "./components/Model";

import { AnimatePresence } from "framer-motion";

/* # AnimatePresence: 
You can animate components when they're removed from the React tree. It allows
components to animate out when unmounting. `AnimatePresence` requires a `exit`
prop enabled for animations. Because React lacks a lifecycle method that:

- Notifies components when they're going to be unmounted and...
- Allows them to defer that unmounting until the operation/animation is complete.

For more information see:
https://www.framer.com/docs/animate-presence/

It has the following requirements:

- You need the child element that it wraps to be a `motion` tag.
- You need that child element to have a `exit` prop.
- But additionally, and only when Routing we have an extra steps.
- Example our <Switch /> needs to track the current `location`.

Without it, you have animation when a page/component renders (mounts) from a the
<Switch /> when it matches url path conditions. But what if we want components
when they (unmount) and need to `exit` animate.

Well, as seen we need to then wrap the Routing components that are handling the
mounts and unmounts tasks, with framers `AnimatePresence` component.

Additionally, as highlighted we need a way for `AnimatePresence` to know when a
route is going going to change. When is it going to apply `exit` animation. To
get `location` state you can use the `useLocation` hook from `react-router-dom`.
We pass these props to <Switch /> `location={location}` and `key={location.key}`
so that it has now location in a controlled state.

`AnimatePresence` will now trigger when `location` state changes meaning a route
has changed and in turn allows `exit` to trigger the unmounting components.

- Next apply `exit` variants and props to your child components like (Home).
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
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  // console.log(location);
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
  // console.log(pizza); // toggle to see updates to state
  return (
    <div>
      <Header />
      <Model showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence exitBeforeEnter={true}>
        {/* Below we register the needed routes: */}
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
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
