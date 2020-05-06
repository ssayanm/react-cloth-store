import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="tracking-normal leading-normal mx-auto">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
