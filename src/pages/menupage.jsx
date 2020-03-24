import React from "react";
import Menuheader from "../components/menu/menuheader.component";
import Menucoffeeitems from "../components/menu/menucoffeeitems.component";
import Foodmenu from "../components/menu/foodmenu.component";
import Menucake from "../components/menu/menucake.component";
import Footer from "../components/footer.component";
const Menu = () => {
  return (
    <div>
      <Menuheader />
      <Menucoffeeitems />
      <Foodmenu />
      <Menucake />
      <Footer />
    </div>
  );
};

export default Menu;
