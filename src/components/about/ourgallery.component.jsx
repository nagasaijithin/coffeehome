import React from "react";
import Button from "../button.component";
import styled from "styled-components";

import griditem6 from "../../assets/griditem6.jpg";
import griditem4 from "../../assets/griditem4.jpg";
import griditem3 from "../../assets/griditem3.jpg";
import griditem2 from "../../assets/griditem2.jpg";
import griditem1 from "../../assets/griditem1.jpg";
const OurgalleryWapper = styled.div`
  width: 100%;
  height: 130vh;
  @media ${prop => prop.theme.mediLaptops} {
    height: auto;
  }
`;
const OurgalleryContiner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  font-size: 1.6rem;
  letter-spacing: 1.8px;
  @media ${prop => prop.theme.mediLaptops} {
    & > div {
      padding: 3rem 0;
    }
  }
`;
const OgcContent = styled.div`
  width: 68%;
  & > div {
    & > h3 {
      font-size: 4rem;
    }
  }
`;

const OgGridWapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  width: 70%;
  grid-gap: 2rem;
  @media ${prop => prop.theme.mediTablet} {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    grid-template-rows: repeat(3, 200px);
  }
  @media ${prop => prop.theme.medimobilesmall} {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  & > div {
    & > img {
      width: 100%;
      height: 100%;
    }
  }
  & > div:nth-child(1) {
    grid-row: span 2;
    @media ${prop => prop.theme.mediTablet} {
      grid-column: span 2;
      grid-row: unset;
    }
  }

  & > div:nth-child(4) {
    grid-column: 2;
    @media ${prop => prop.theme.mediTablet} {
      grid-column: unset;
    }
  }
`;
const Ourgallery = () => {
  return (
    <OurgalleryWapper>
      <OurgalleryContiner>
        <OgcContent>
          <div>
            <h3>OUR GALLERY</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            obcaecati facilis iure accusantium, voluptate cum a nam,{" "}
          </p>
        </OgcContent>

        <OgGridWapper>
          <div>
            <img src={griditem6} alt="" />
          </div>
          <div>
            <img src={griditem2} alt="" />
          </div>
          <div>
            <img src={griditem3} alt="" />
          </div>
          <div>
            <img src={griditem4} alt="" />
          </div>
          <div>
            <img src={griditem1} alt="" />
          </div>
        </OgGridWapper>
        <div>
          <Button color="black">VIEW MORE</Button>
        </div>
      </OurgalleryContiner>
    </OurgalleryWapper>
  );
};

export default Ourgallery;
