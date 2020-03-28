import React from "react";
import Button from "../button.component";
import ourstory from "../../assets/ourstory.jpg";
import styled from "styled-components";
const VbGwapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  & > div {
    width: 50%;
  }
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5rem;
    font-size: 1.6rem;
    letter-spacing: 1.8px;
    & > div > h2 {
      font-size: 4rem;
    }
  }
  & > div:nth-child(2) {
    background-image: url(${ourstory});
    background-position: center;
    background-size: cover;
  }
`;
const Vbg = () => {
  return (
    <VbGwapper>
      <div>
        <div>
          <h2>VIEW BREWING GUIDES</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            excepturi quis cupiditate vel, impedit facilis. Minima cupiditate,
            ipsum repellat at quo dolorem
          </p>
        </div>
        <div>
          <Button color="black">BREWING GUIDES</Button>
        </div>
      </div>
      <div></div>
    </VbGwapper>
  );
};

export default Vbg;
