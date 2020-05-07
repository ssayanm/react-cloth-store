import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/pages/Homepage";

const App = () => {
  return (
    <div className="tracking-normal leading-normal mx-auto">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
