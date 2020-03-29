import React from "react";
import styled from "styled-components";
import coffeebeans from "../../assets/coffeebeans.jpg";
import Button from "../button.component";

const GreatCoffeeWapper = styled.div`
  width: 100%;
  height: auto;
`;
const GtCGrid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const GtCGridContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
  font-size: 1.7rem;
  letter-spacing: 1.8px;
  & > h3 {
    font-size: 3.2rem;
  }
`;
const GtCGridImg = styled.div`
  background-image: url(${coffeebeans});
  width: 50%;
  background-position: center;
  background-size: cover;
`;
const Greatcoffeebeans = () => {
  return (
    <GreatCoffeeWapper>
      <GtCGrid>
        <GtCGridContent>
          <h3>FRESH BEANS</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            cupiditate corrupti ducimus quaerat architecto ut ad ab cumque!
            Molestias cupiditate earum error ipsum architecto illum eum ab
            sapiente. Modi, sit.
          </p>
          <Button color="black">LEARN MORE</Button>
        </GtCGridContent>
        <GtCGridImg></GtCGridImg>
      </GtCGrid>
    </GreatCoffeeWapper>
  );
};

export default Greatcoffeebeans;
