import React from "react";

import exp1 from "../../assets/exp1.png";
import exp2 from "../../assets/exp2.png";
import exp3 from "../../assets/exp3.png";

import Button from "../button.component";

import styled from "styled-components";
const Simplecoffe = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  text-align: center;
`;
const Simplecoffegrid = styled.div`
  display: flex;
`;
const SimplecoffeWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 2rem;
  letter-spacing: 1.2px;
`;
const GirdItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  padding: 3rem;
  & > h4 {
    font-size: 1.7rem;
  }
  & > img {
    width: 53%;
  }
`;
const ContentWapper = styled.div`
  max-width: 59%;
  font-size: 1.3rem;
  & > h2 {
    font-size: 3rem;
    letter-spacing: 3.8px;
  }
`;
const Homesimplecoffee = () => {
  return (
    <div>
      <Simplecoffe>
        <SimplecoffeWapper>
          <ContentWapper>
            <h2>WE BELIVE IN COFFEE THAT TASTES INCREDIBLE</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eque ipsa
              quae ab illo.
            </p>
          </ContentWapper>
          <Simplecoffegrid>
            <GirdItems>
              <img src={exp2} alt="" />
              <h4>MOCHA LATTE</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </p>
            </GirdItems>
            <GirdItems>
              <img src={exp1} alt="" />
              <h4>POUR OVER</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </p>
            </GirdItems>
            <GirdItems>
              <img src={exp3} alt="" />
              <h4>ESPRESSO</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </p>
            </GirdItems>
          </Simplecoffegrid>
          <Button path="/menu" color="black" size="true">
            FULL MENU
          </Button>
        </SimplecoffeWapper>
      </Simplecoffe>
    </div>
  );
};

export default Homesimplecoffee;
