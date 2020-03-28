import React from "react";

const Shopegrid = ({ name, price, img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default Shopegrid;
