import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from "./components/form.jsx";
import PeopleComponent from "./components/planetcomponent.jsx";
import PlanetComponent from "./components/peoplecomponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <h1>Luke API-walker</h1>
      <Form />
      <Switch>
        <Route path="/people/:id">
          <PeopleComponent />
        </Route>
        <Route path="/planets/:id">
          <PlanetComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
