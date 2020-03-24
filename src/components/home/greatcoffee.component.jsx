import React from "react";
import styled from "styled-components";
import greatcoffe1 from "../../assets/greatcoffee1.jpg";
import Button from "../button.component";
const GreateCoffeeWapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${greatcoffe1});
  background-size: cover;
  background-position: center;
  position: relative;
`;
const LeftContent = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-20%, -50%);
  font-size: 1.7rem;
  width: 55%;
  & > div {
    & > h2 {
      font-size: 5rem;
    }
  }
`;
const Greatcoffee = () => {
  return (
    <GreateCoffeeWapper>
      <LeftContent>
        <div>
          <h2>GREAT COFFEE</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quos
            cupiditate inventore ipsam a maiores doloremque possimus, esse,
            voluptatem voluptatum ex ullam quod nostrum expedita facilis culpa
            voluptas qui error.
          </p>
          <Button path="/menu">FULL MENU</Button>
        </div>
      </LeftContent>
    </GreateCoffeeWapper>
  );
};

export default Greatcoffee;
