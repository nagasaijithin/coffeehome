import React from "react";
import Button from "./button.component";
import styled from "styled-components";
import openat from "../assets/openat.jpg";
const FooterWapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  & > * {
    width: 50%;
    color: white;
  }
`;
const FooterLeftGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3rem;
  & > div {
    font-size: 1.5rem;
    & > h2 {
      font-size: 3rem;
    }
    & > h4 {
      font-size: 2rem;
      color: #d29e66;
    }
  }
`;
const FooterLeftGridImg = styled.div`
  background-image: url(${openat});
  background-position: center;
  background-size: cover;
  width: 70%;
  position: relative;
  z-index: -1;
`;
const FooterLeftGridContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, black 60%, transparent);
`;
const FooterLeftGridItemsWapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;
const Footer = () => {
  return (
    <FooterWapper>
      <div>
        <FooterLeftGridContent>
          <FooterLeftGrid>
            <div>
              <h2>COME ON IN!</h2>
            </div>
            <div>
              <h4>WEEKDAYS</h4>
              <p>08PM - 12PM</p>
            </div>
            <div>
              <h4>WEEKENDS</h4>
              <p>12PM - 02PM</p>
            </div>
            <div>
              <Button path="/menu">VIEW THE MENU</Button>
            </div>
          </FooterLeftGrid>
          <FooterLeftGridImg></FooterLeftGridImg>
        </FooterLeftGridContent>
      </div>
      <div>
        <FooterLeftGridItemsWapper>
          <FooterLeftGrid>
            <div>
              <h2>CONTACT</h2>
            </div>
            <div>
              <h4>PHONE</h4>
              <p>+(000) 111 222 333</p>
            </div>
            <div>
              <h4>MAIL</h4>
              <p>address@gmail.com</p>
            </div>
            <div>
              <h4>ADDRESS</h4>
              <p>534 TN, doula street Ny, New York</p>
            </div>
          </FooterLeftGrid>
        </FooterLeftGridItemsWapper>
      </div>
    </FooterWapper>
  );
};

export default Footer;
