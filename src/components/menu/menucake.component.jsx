import React from "react";

import cexp1 from "../../assets/cexp1.png";
import cexp2 from "../../assets/cexp2.png";
import muffin from "../../assets/muffin.png";
import styled from "styled-components";

import Menuitems from "../menuitems.component";

const CakeWapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: rgb(36, 37, 43);
  color: white;
  @media ${prop => prop.theme.medifootermin} {
    height: auto;
    padding: 2rem;
  }
  & > div {
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & > div {
      & > h2 {
        font-size: 4rem;
      }
    }
  }
`;
const CoffeInnerGrid = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media ${prop => prop.theme.medifootermin} {
    flex-direction: column;
    align-items: center;
  }
  & > div {
    width: 30%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media ${prop => prop.theme.medifootermin} {
      width: 40%;
      padding: 2rem 0;
    }
    & > img {
      width: 50%;
      height: 60%;
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
const Menucake = () => {
  return (
    <CakeWapper>
      <div>
        <div>
          <h2>PASTRIES</h2>
        </div>
        <CoffeInnerGrid>
          <Menuitems img={cexp1}>MACARONS</Menuitems>
          <Menuitems img={muffin}>CHOCOLATE CAKES</Menuitems>
          <Menuitems img={cexp2}>CUPCAKES</Menuitems>
        </CoffeInnerGrid>
      </div>
    </CakeWapper>
  );
};

export default Menucake;
