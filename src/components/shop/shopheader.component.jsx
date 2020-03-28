import React from "react";
import styled from "styled-components";
import shopheader from "../../assets/shopheader.jpg";

const ShopWapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(
      to right,
      rgba(15, 32, 39, 0.41),
      rgba(32, 58, 67, 0.41),
      rgba(44, 83, 100, 0.45)
    ),
    url(${shopheader});
  background-position: center;
  background-size: cover;
`;
const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 1.6rem;
  & > div {
    & > h2 {
      font-size: 5rem;
    }
  }
`;
const Shopheader = () => {
  return (
    <ShopWapper>
      <CenterContent>
        <div>
          <h2>SHOP</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            amet architecto ipsam tempora hic ab in earum vero
          </p>
        </div>
      </CenterContent>
    </ShopWapper>
  );
};

export default Shopheader;
