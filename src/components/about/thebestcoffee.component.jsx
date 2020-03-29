import React from "react";

import styled from "styled-components";
const TbCsWapper = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
`;
const CenterContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;
const WapperShowcase = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 1.8px;
  padding: 2rem;
`;
const WapperShowcaseTitle = styled.div`
  width: 65%;
  margin: 0 auto;
  & > div {
    & > h2 {
      font-size: 3.5rem;
    }
  }
`;

const WapperShowcaseContent = styled.div`
  width: auto;
  display: flex;
  margin: 0 auto;
  @media ${prop => prop.theme.medihomeheadertitlemin} {
    flex-direction: column;
    justify-content: space-evenly;
  }
  & > div {
    padding: 2rem;
  }
`;
const Thebestcoffee = () => {
  return (
    <TbCsWapper>
      <CenterContent>
        <WapperShowcase>
          <WapperShowcaseTitle>
            <div>
              <h2>THE BEAST COFFEE SHOP</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              asperiores explicabo eum veritatis laudantium ratione quos
              necessitatibus eaque odio.
            </p>
          </WapperShowcaseTitle>
          <WapperShowcaseContent>
            <div>
              <h3>BEST BEANS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                ab
              </p>
            </div>
            <div>
              <h3>QUALITY MILK</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                ab
              </p>
            </div>
            <div>
              <h3>PERFECT BLEND</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                ab
              </p>
            </div>
          </WapperShowcaseContent>
        </WapperShowcase>
      </CenterContent>
    </TbCsWapper>
  );
};

export default Thebestcoffee;
