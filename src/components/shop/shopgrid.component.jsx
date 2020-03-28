import React from "react";

import Shopegrid from "../shopegrid.component";
import shopgriditem1 from "../../assets/shopgriditem1.jpg";
import shopgriditem2 from "../../assets/shopgriditem2.jpg";
import shopgriditem3 from "../../assets/shopgriditem3.jpg";
import shopgriditem4 from "../../assets/shopgriditem4.jpg";
import shopgriditem5 from "../../assets/shopgriditem5.jpg";
import shopgriditem6 from "../../assets/shopgriditem6.jpg";
import shopgriditem7 from "../../assets/shopgriditem7.jpg";
import shopgriditem8 from "../../assets/shopgriditem8.jpg";
import shopgriditem9 from "../../assets/shopgriditem9.jpg";
import styled from "styled-components";
const ShopgridWapper = styled.div`
  width: 100%;
  height: 150vh;
`;
const ShopgridContiner = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  & > div {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-auto-rows: 1fr;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    padding: 1rem;
    font-size: 1.3rem;
    & > div {
      & > img {
        width: 100%;
        height: 204px;
      }
    }
  }
`;
const Shopgrid = () => {
  return (
    <ShopgridWapper>
      <ShopgridContiner>
        <div>
          <Shopegrid name="COFFEE GRINDER" price="120.00" img={shopgriditem1} />
          <Shopegrid
            name="FRENCH PRESS SET"
            price="99.00"
            img={shopgriditem2}
          />
          <Shopegrid name="CERAMIC MUG" price="78.00" img={shopgriditem3} />
          <Shopegrid name="MASON JARS" price="12.00" img={shopgriditem4} />
          <Shopegrid name="COFFEE BEANS" price="38.00" img={shopgriditem5} />
          <Shopegrid name="CERAMIC PLATES" price="64.00" img={shopgriditem6} />
          <Shopegrid name="STARTER KIT" price="230.00" img={shopgriditem7} />
          <Shopegrid name="STARTER KIT" price="145.00" img={shopgriditem8} />
          <Shopegrid name="CERAMIC BOWL" price="12.00" img={shopgriditem9} />
        </div>
      </ShopgridContiner>
    </ShopgridWapper>
  );
};

export default Shopgrid;
