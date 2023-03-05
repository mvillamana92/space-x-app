import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Launches from "./Launches";
import Rockets from "./Rockets";
import SingleRocket from "./SingleRocket";
import NotFound from "./NotFound";

const BodyRoutes = () => {
  return (
    <Switch>
      <Route path="/rockets/:id">
        <SingleRocket />
      </Route>
      <Route exact path="/rockets">
        <Rockets />
      </Route>
      <Route exact path="/launches">
        <Launches />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default BodyRoutes;
