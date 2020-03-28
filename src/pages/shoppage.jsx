import React from "react";
import Shopheader from "../components/shop/shopheader.component";
import Shopgrid from "../components/shop/shopgrid.component";
import Coffeebeanss from "../components/shop/coffeebeanss.component";
import Vbg from "../components/shop/vbg.component";
import Footer from "../components/footer.component";

const Shoppage = () => {
  return (
    <div>
      <Shopheader />
      <Shopgrid />
      <Coffeebeanss />
      <Vbg />
      <Footer />
    </div>
  );
};

export default Shoppage;
