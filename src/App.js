import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
