import React from "react";
import styled from "styled-components";
import thebeastcoffeeshop from "../../assets/thebestcoffeeshop.jpg";
import Button from "../button.component";

const TheBestCoffeShop = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, black 51%, transparent);
  position: relative;
`;
const TbCsGrid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  & > * {
    width: 50%;
  }
`;
const TbCsImg = styled.div`
  background-image: url(${thebeastcoffeeshop});
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: -1;
`;
const TbCscontentWapper = styled.div`
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-40%, -50%);
  color: white;
  font-size: 1.6rem;
  letter-spacing: 1.8px;
  & > div {
    & > h2 {
      font-size: 5rem;
    }
  }
`;

const Bestcoffeeshop = () => {
  return (
    <TheBestCoffeShop>
      <TbCscontentWapper>
        <div>
          <h2>THE BEST COFFEE SHOP</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            sapiente quae beatae labore repellendus, maxime ipsum dolorem quasi,
            temporibus fuga provident accusantium!
          </p>
          <Button path="/about">ABOUT US</Button>
        </div>
      </TbCscontentWapper>
      <TbCsGrid>
        <div></div>
        <TbCsImg></TbCsImg>
      </TbCsGrid>
    </TheBestCoffeShop>
  );
};

export default Bestcoffeeshop;
