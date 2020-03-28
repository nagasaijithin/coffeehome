import React from "react";
import Button from "../button.component";
import styled from "styled-components";
import menuhero from "../../assets/menuhero.jpg";

const CoffeebeanssWapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(15, 32, 39, 0.41),
      rgba(32, 58, 67, 0.41),
      rgba(44, 83, 100, 0.45)
    ),
    url(${menuhero});
  background-position: center;
  background-size: cover;
  & > div {
    height: 100%;
    position: relative;
    & > div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      font-size: 1.6rem;
      letter-spacing: 1.8px;
      & > h2 {
        font-size: 4rem;
      }
    }
  }
`;
const Coffeebeanss = () => {
  return (
    <CoffeebeanssWapper>
      <div>
        <div>
          <h2>COFFEE BEAN SUBSCRIPTIONS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dolorum doloremque eaque vero, repudiandae qui inventore saepe
          </p>
          <Button>LEARN MORE</Button>
        </div>
      </div>
    </CoffeebeanssWapper>
  );
};

export default Coffeebeanss;
