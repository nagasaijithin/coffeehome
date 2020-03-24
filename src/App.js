import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Menu from "./pages/menupage";

const Aboutus = () => <div>Aboutus</div>;
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/aboutus" component={Aboutus} />
    </BrowserRouter>
  );
}

export default App;
