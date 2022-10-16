import { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

function App() {
  // state object
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
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
  // Below we register the needed routes:
  return (
    <div>
      <Header />
      <Switch>
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
    </div>
  );
}

export default App;
