import React from "react";
// import { Link } from "react-router-dom";

import styled from "styled-components";
import heroimg from "../../assets/heroimg.jpg";
import Button from "../button.component";

const HomeContinerHead = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(15, 32, 39, 0.41),
      rgba(32, 58, 67, 0.41),
      rgba(44, 83, 100, 0.45)
    ),
    url(${heroimg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;
const Centercomp = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const HeroTitle = styled.div`
  color: white;
  text-align: center;
  font-size: 2rem;
`;
const HeroMainTitle = styled.h2`
  font-size: 8rem;
  letter-spacing: 0.8rem;
`;

const Homeheader = () => {
  return (
    <div>
      <HomeContinerHead>
        <Centercomp>
          <HeroTitle>
            <div>
              <HeroMainTitle>COFFEE HOUSE</HeroMainTitle>
            </div>
            <div>
              <h4>Serving Only The Best Since 2013</h4>
            </div>
            <Button path="/shop">SHOP</Button>
          </HeroTitle>
        </Centercomp>
      </HomeContinerHead>
    </div>
  );
};

export default Homeheader;
