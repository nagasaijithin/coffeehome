import React from "react";
import styled from "styled-components";
import Button from "../button.component";
const ContectsWapper = styled.div`
  height: 70vh;
  width: 100%;
  background-color: #443e3c;
  position: relative;
`;

const CenterContent = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const ContentGrid = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 1.8px;
  & > div:nth-child(1) {
    width: 60%;
    & > h2 {
      font-size: 4rem;
    }
  }
  & > div:nth-child(2) {
    width: 60%;
    & > input {
      width: 100%;
      font-size: 2rem;
      padding: 0.7rem;
      text-transform: capitalize;
      border-radius: 5px;
      border: none;
    }
  }
`;
const Contects = () => {
  return (
    <ContectsWapper>
      <CenterContent>
        <ContentGrid>
          <div>
            <h2>JOIN OUR NEWSLETTER!</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              autem esse voluptate odit. Consequuntur fugit laborum
            </p>
          </div>
          <div>
            <input placeholder="Email" type="text" />
          </div>
          <Button>SUBSCRIBE</Button>
        </ContentGrid>
      </CenterContent>
    </ContectsWapper>
  );
};

export default Contects;
