import React from "react";
import styled from "styled-components";

import Card from "../components/Card";

const Home = (props) => {
  return (
    <Card>
      <Message>Welcome back Riqui!</Message>
    </Card>
  );
};

export default Home;

const Message = styled.h1`
  width: 90%;
  max-width: 40rem;
  padding: 3rem;
  margin: 2rem auto;
  text-align: center;
`;
