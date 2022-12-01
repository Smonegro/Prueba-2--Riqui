import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <ContainerInput>
      <label className="label">{label}</label>

      <input className="input" {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </ContainerInput>
  );
};

export default Input;

const ContainerInput = styled.div`
  .input {
    flex: 1;
    font: inherit;
    width: 75%;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin-left: 1rem;
    display: block;
  }
  .label {
    font-weight: bold;
    flex: 1;
    color: #464646;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    margin-left: 1rem;
    display: block;
  }

  .input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  .error {
    border-color: red;
    background: #fbdada;
  }
`;
