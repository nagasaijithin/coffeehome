import React from "react";
import styled from "styled-components";
import ourstory from "../../assets/ourstory.jpg";

const StorysContiner = styled.div`
  background-image: linear-gradient(black 60%, transparent), url(${ourstory});
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-size: 100% 180%;
  background-repeat: no-repeat;
  position: relative;
`;
const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  letter-spacing: 1.8px;
  & > div {
    font-size: 1.4rem;
    & > h2 {
      font-size: 5rem;
    }
  }
`;

const Ourstorys = () => {
  return (
    <StorysContiner>
      <CenterContent>
        <div>
          <h2>OUR STORY</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </p>
        </div>
      </CenterContent>
    </StorysContiner>
  );
};

export default Ourstorys;
