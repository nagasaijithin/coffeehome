import React from "react";
import Button from "../button.component";
import greatcoffee from "../../assets/greatcoffee.jpg";
import serveshowcase from "../../assets/serveshowcase.jpg";
import styled from "styled-components";
const WeserveWapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${greatcoffee});
  background-position: center;
  background-size: cover;
  @media ${prop => prop.theme.medihomeheadertitlemin} {
    height: 150vh;
  }
`;
const WeserveContiner = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;
const WeserveGridWapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  @media ${prop => prop.theme.medihomeheadertitlemin} {
    flex-direction: column;
  }
  & > div {
    width: 45%;
    height: 75%;
    background-color: white;
    @media ${prop => prop.theme.medihomeheadertitlemin} {
      height: 45%;
      width: 55%;
    }
  }
`;
const WeserveGridItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3rem;
  text-align: center;
  font-size: 1.5rem;
`;

const WeserveGridItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WeserveGridItemLeftItems = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 2rem;
  font-size: 1.4rem;
  & > div {
    & > p {
      color: #d29e66;
    }
  }
`;
const WeserveGridItemLeftItemsImg = styled.div`
  background-image: url(${serveshowcase});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50%;
`;
const Weserve = () => {
  return (
    <WeserveWapper>
      <WeserveContiner>
        <WeserveGridWapper>
          <WeserveGridItemRight>
            <h2>WE SERVE DELICIOUS COFFEE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sed tenetur inventore minus odio voluptatibus quam
              accusamus illo neque
            </p>
            <Button path="/menu" color="black">
              BROWSE MENU
            </Button>
          </WeserveGridItemRight>
          <WeserveGridItemLeft>
            <WeserveGridItemLeftItemsImg></WeserveGridItemLeftItemsImg>
            <WeserveGridItemLeftItems>
              <div>
                <h2>12</h2>
                <p>BEAN VARIETIES</p>
              </div>
              <div>
                <h2>8</h2>
                <p>LOCATIONS</p>
              </div>
            </WeserveGridItemLeftItems>
          </WeserveGridItemLeft>
        </WeserveGridWapper>
      </WeserveContiner>
    </WeserveWapper>
  );
};

export default Weserve;
