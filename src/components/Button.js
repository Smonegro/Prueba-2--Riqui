import React from "react";
import styled from "styled-components";

const Button = ({ children, isLoading, onClick, ...props }) => {
  return (
    <ButtonContainer
      disabled={props.disabled || false}
      onClick={() => !props.disabled && onClick && onClick()}
      {...props}
    >
      <>
        {isLoading ? (
          <div className="spinner">
            <div>Cargando...</div>
          </div>
        ) : (
          children
        )}
      </>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  border: ${(props) =>
    props.disabled ? "1px solid #ccc" : "1px solid #bd23e4"};

  background: ${(props) => (props.disabled ? "#ccc" : "#bd23e4")};

  color: ${(props) => (props.disabled ? "#666666" : "white")};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  opacity: ${(props) => (props.disabled ? "0.7" : 1)};

  font-size: 1.15rem;
  border-radius: 30px;
  margin-top: 1rem;
  padding: 0.75rem 3.5rem;
  font: inherit;
  .button:focus {
    outline: none;
  }

  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
