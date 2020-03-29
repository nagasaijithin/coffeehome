import React from "react";
import styled from "styled-components";
import abouthero from "../../assets/abouthero.jpg";
const Heroheader = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(15, 32, 39, 0.41),
      rgba(32, 58, 67, 0.41),
      rgba(44, 83, 100, 0.45)
    ),
    url(${abouthero});
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
  font-size: 2rem;
  letter-spacing: 1.8px;
  @media ${prop => prop.theme.mediLaptops} {
    width: 73%;
  }
  & > div {
    font-size: 4rem;
  }
`;
const Aboutheader = () => {
  return (
    <Heroheader>
      <CenterContent>
        <div>
          <h2>ABOUT US</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          vitae eligendi illum cupiditate nemo minima, enim iure asperiores
          possimus. Eligendi
        </p>
      </CenterContent>
    </Heroheader>
  );
};

export default Aboutheader;
