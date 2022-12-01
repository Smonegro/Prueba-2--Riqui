import React from "react";
import styled from "styled-components";

const GeneralDiv = styled.div`
  background: white;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  box-sizing: border-box;
  margin-right: 25rem;
  margin-left: 25rem;
  min-width: 50%;
`;

const Card = (props) => {
  return <GeneralDiv>{props.children}</GeneralDiv>;
};

export default Card;
