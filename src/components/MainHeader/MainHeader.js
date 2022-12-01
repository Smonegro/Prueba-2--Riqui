import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <Tittle>
      <h1>My App Test</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </Tittle>
  );
};

export default MainHeader;

const Tittle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
  color: white;
`;
