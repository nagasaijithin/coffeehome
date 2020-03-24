import React from "react";

import styled from "styled-components";
import exp1 from "../../assets/exp1.png";
import exp2 from "../../assets/exp2.png";
import exp3 from "../../assets/exp3.png";
import exp4 from "../../assets/exp4.png";
import exp5 from "../../assets/exp5.png";
import muffin from "../../assets/muffin.png";

import Menuitems from "../menuitems.component";
const CoffeeItems = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgb(36, 37, 43);
  letter-spacing: 1.6px;
`;
const CoffeeItemsWapper = styled.div`
  width: 80%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  & > div {
    & > h2 {
      font-size: 5rem;
    }
  }
`;
const CoffeInnerGrid = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  & > div {
    width: 30%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & > img {
      width: 50%;
    }
    & > div {
      font-size: 1.2rem;
      & > p:last-child {
        color: rgb(210, 158, 102);
        font-size: 1.4rem;
      }
      & > * {
        padding: 0.3rem;
      }
    }
  }
`;
const Menucoffeeitems = () => {
  return (
    <CoffeeItems>
      <CoffeeItemsWapper>
        <div>
          <h2>COFFEE</h2>
        </div>
        <div>
          <CoffeInnerGrid>
            <Menuitems img={exp1}>BLACK COFFEE</Menuitems>
            <Menuitems img={exp2}>ESPRESSO</Menuitems>
            <Menuitems img={exp3}>LATTE</Menuitems>
          </CoffeInnerGrid>
          <CoffeInnerGrid>
            <Menuitems img={exp4}>BROWNIE MOCHA</Menuitems>
            <Menuitems img={exp5}>MACCHIATO</Menuitems>
            <Menuitems img={muffin}>BLACK CAKE</Menuitems>
          </CoffeInnerGrid>
        </div>
      </CoffeeItemsWapper>
    </CoffeeItems>
  );
};

export default Menucoffeeitems;
