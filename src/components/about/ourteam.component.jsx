import React from "react";
import Button from "../button.component";

import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import styled from "styled-components";
const Ourteam = styled.div`
  width: 100%;
  height: 130vh;
  padding: 2rem;
  @media ${prop => prop.theme.mediTablet} {
    padding: 2rem;
    height: auto;
  }
`;
const OurteamContiner = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  @media ${prop => prop.theme.mediTablet} {
    width: 80%;
  }
`;
const ContinerContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.6rem;
  letter-spacing: 1.8px;
  @media ${prop => prop.theme.mediTablet} {
    & > div {
      padding: 4rem 0;
    }
    & > div:nth-child(2) > div > div {
      padding: 2rem;
    }
  }

  & > div:nth-child(1) {
    width: 60%;
    text-align: center;
    @media ${prop => prop.theme.mediTablet} {
      width: 90%;
    }
    & > div {
      & > h2 {
        font-size: 4rem;
      }
    }
  }
  & > div:nth-child(2) {
    width: 100%;
    & > div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      @media ${prop => prop.theme.mediTablet} {
        flex-direction: column;
        align-items: center;
      }

      & > div > div > img {
        width: 20rem;
      }
    }
  }
`;
const Ourteams = () => {
  return (
    <Ourteam>
      <OurteamContiner>
        <ContinerContent>
          <div>
            <div>
              <h2>OUR TEAM</h2>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, culpa reprehenderit, dicta repellat perspiciatis
              dignissimos exercitationem dolorem
            </p>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <img src={person1} alt="" />
                </div>
                <div>
                  <h2>ALICIA BOYDE</h2>
                  <p>Owner</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={person2} alt="" />
                </div>
                <div>
                  <h2>JAKE PLOTTER</h2>
                  <p>Head Barista</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={person3} alt="" />
                </div>
                <div>
                  <h2>JENNIFER CHAPMAN</h2>
                  <p>Staff Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button color="black">VIEW MORE</Button>
          </div>
        </ContinerContent>
      </OurteamContiner>
    </Ourteam>
  );
};

export default Ourteams;
