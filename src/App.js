import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import Menu from "./pages/menupage";
import ScrollToTop from "./scrolltop";
const Aboutus = () => <div>Aboutus</div>;
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/aboutus" component={Aboutus} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
