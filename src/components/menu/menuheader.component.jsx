import React from "react";
import menuhero from "../../assets/menuhero.jpg";
import styled from "styled-components";
const MenuHead = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${menuhero});
  width: 100%;
  height: 100vh;
  letter-spacing: 1.6px;
`;
const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.6rem;
  & > div {
    font-size: 5rem;
  }
`;
const Menuheader = () => {
  return (
    <MenuHead>
      <CenterContent>
        <div>
          <h2>DRINK MENU</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, culpa
          corrupti, tempora hic dignissimos ratione deserunt suscipit
        </p>
      </CenterContent>
    </MenuHead>
  );
};

export default Menuheader;
