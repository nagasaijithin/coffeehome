import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import Menu from "./pages/menupage";
import About from "./pages/aboutpage";
import Shop from "./pages/shoppage";
import ScrollToTop from "./scrolltop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
