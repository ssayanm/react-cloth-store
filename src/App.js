import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

const App = () => {
  return (
    <div className="tracking-normal leading-normal mx-auto">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
