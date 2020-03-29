import React from "react";
import styled from "styled-components";
import foodmenuimg from "../../assets/foodmenuimg.jpg";

const FoodMenu = styled.div`
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(
      to right,
      rgba(15, 32, 39, 0.41),
      rgba(32, 58, 67, 0.41),
      rgba(44, 83, 100, 0.45)
    ),
    url(${foodmenuimg});
  background-position: center;
  background-size: cover;
  position: relative;
  letter-spacing: 1.6px;
  @media ${prop => prop.theme.medifootermin} {
    height: 130vh;
  }
`;
const Centercontent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  color: white;
  font-size: 1.8rem;
  & > div {
    font-size: 4rem;
  }
`;
const Foodmenu = () => {
  return (
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
  );
};

export default Foodmenu;
