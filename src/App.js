import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import Menu from "./pages/menupage";
import About from "./pages/aboutpage";
import Shop from "./pages/shoppage";
import ScrollToTop from "./scrolltop";
function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
