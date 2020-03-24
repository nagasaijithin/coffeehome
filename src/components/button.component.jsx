import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ButtonCompWapper = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
`;

const ButtonComp = styled(Link).attrs(prop => ({
  to: `${prop.path ? prop.path : ""}`
}))`
  text-decoration: none;
  color: white;
  padding: 0.8rem 1rem;
  background-color: rgb(210, 158, 102);
  border: 1px solid rgb(210, 158, 102);
  transition: all 0.4s ease-in;
  font-size: ${prop => prop.size && "1.5rem"};
  &:hover {
    background-color: transparent;
    color: ${prop => prop.color === "black" && "black"};
  }
`;
const Button = ({ children, path, ...props }) => {
  return (
    <ButtonCompWapper>
      <ButtonComp {...props} path={path}>
        {children}
      </ButtonComp>
    </ButtonCompWapper>
  );
};
export default Button;
