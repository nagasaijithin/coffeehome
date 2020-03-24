import React from "react";
import Menuheader from "../components/menu/menuheader.component";
import Menucoffeeitems from "../components/menu/menucoffeeitems.component";
import styled from "styled-components";
import foodmenuimg from "../assets/foodmenuimg.jpg";

const FoodMenu = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${foodmenuimg});
  background-position: center;
  background-size: cover;
  position: relative;
`;
const Centercontent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  color: white;
  font-size: 1.6rem;
  & > div {
    font-size: 4rem;
  }
`;
const Menu = () => {
  return (
    <div>
      <Menuheader />
      <Menucoffeeitems />
      <FoodMenu>
        <Centercontent>
          <div>
            <h2>FOOD MENU</h2>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sit,
            nesciunt corporis itaque quam perspiciatis exercitationem mollitia
            ullam eius sequi iste tempora beatae eaque architecto velit
            doloremque, magni recusandae modi.
          </p>
        </Centercontent>
      </FoodMenu>
    </div>
  );
};

export default Menu;
