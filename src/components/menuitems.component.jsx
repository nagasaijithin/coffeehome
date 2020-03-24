import React from "react";

const Menuitems = ({ children, img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h3>{children}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cumque totam, quia accusamus eum.
        </p>
        <p>$4</p>
      </div>
    </div>
  );
};

export default Menuitems;
