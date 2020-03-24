import React from "react";
import Homeheader from "../components/home/homeheader.component";
import Homesimplecoffee from "../components/home/homesimplecoffee.component";
import Ourstorys from "../components/home/ourstorys.component";
import Greatcoffeebeans from "../components/home/greatcoffeebeans.component";
import Greatcoffee from "../components/home/greatcoffee.component";
import Bestcoffeeshop from "../components/home/bestcoffeeshop.component";
import Footer from "../components/footer.component";
const Home = () => {
  return (
    <div className="home-continer">
      <Homeheader />
      <Homesimplecoffee />
      <Ourstorys />
      <Greatcoffeebeans />
      <Greatcoffee />
      <Bestcoffeeshop />
      <Footer />
    </div>
  );
};
export default Home;
