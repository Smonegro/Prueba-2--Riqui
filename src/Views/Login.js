import React, { useState } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

const initialValues = {
  email: "",
  password: "",
  password_confirmation: "",
};

const passwordLength = { min: 6, max: 12 };

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .label("Email Address"),
  password: Yup.string()
    .label("Password")
    .min(passwordLength.min, "Your password must be at least 6 characters")
    .max(passwordLength.max, "Your password must be less than 12 character")
    .required("This field is Required"),
  password_confirmation: Yup.string()
    .label("Confirm Password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [FormIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleForm(values) {
    // setIsLoading(true);
    console.log(values);

    const error = {
      email: values.errors?.email || "",
      password: values.errors?.password || "",
      password_confirmation: values.errors?.password_confirmation || "",
    };
    setError(error);

    setIsLoading(false);
  }

  // const ChangeHandler = (value) => {
  //   FormIsValid(value);

  //   setFormIsValid(
  //     value.schema.email &&
  //       value.schema.password &&
  //       value.schema.password_confirmation
  //   );
  // };

  return (
    <Card className="login">
      <FormControl>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleForm}
        >
          {({ handleSubmit }) => (
            <Form className="control">
              <div style={{ marginTop: "8px" }}>
                <Input
                  label="Email Address"
                  name="email"
                  placeholder="Ricardo@gmail.com"
                  type="email"
                  error={error.email}
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Insert your Password"
                  error={error.password}
                />

                <Input
                  label="Confirm Password"
                  name="password_confirmation"
                  type="password"
                  placeholder="Insert your Password Again"
                  error={error.password_confirmation}
                />

                <div className="actions">
                  <Button
                    {...props}
                    kind="outline"
                    type="submit"
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    // disabled={!schema || isLoading}
                    // handleForm={!schema || error}
                    // disable={handleForm !== schema}
                    // disabled={!FormIsValid || isLoading}
                  >
                    Loggin
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </FormControl>
    </Card>
  );
};

export default Login;

const FormControl = styled.div`
  .login {
    width: 90%;
    max-width: 40rem;
    margin: 2rem auto;
    padding: 2rem;
  }

  .control {
    margin: 1rem 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }

  .actions {
    text-align: center;
  }

  max-width: 768px;
  min-width: 500px;
  align-items: center;
  flex-direction: row;
`;

// const [error, setError] = useState({
//   email: "",
//   password: "",
//   password_confirmation: "",
// });

//enable={!setAgreed || setIsLoading}
// era de la tercera linea del button ... style={{ width: "100%", margin: "24px 0" }}
// const FormControl = styled.div`
//   .login {
//     width: 90%;
//     max-width: 40rem;
//     margin: 2rem auto;
//     padding: 2rem;
//   }

//   .control {
//     margin: 1rem 0;
//     display: flex;
//     align-items: stretch;
//     flex-direction: column;
//   }

//   .control label,
//   .control input {
//     display: block;
//   }

//   .control label {
//     font-weight: bold;
//     flex: 1;
//     color: #464646;
//     margin-bottom: 0.5rem;
//     margin-left: 1rem;
//   }

//   .control input {
//     flex: 3;
//     font: inherit;
//     padding: 0.35rem 0.35rem;
//     border-radius: 6px;
//     border: 1px solid #ccc;
//     margin-left: 1rem;
//   }

//   .control input:focus {
//     outline: none;
//     border-color: #4f005f;
//     background: #f6dbfc;
//   }

//   .control.invalid input {
//     border-color: red;
//     background: #fbdada;
//   }

//   .actions {
//     text-align: center;
//   }

//   @media (min-width: 768px) {
//     .control {
//       align-items: center;
//       flex-direction: row;
//     }
//   }
// `;

//esto estaba en el input

// {...Formik.getFieldProps("email")}
// // onChange={Formik.handleChange}
// // onBlur={Formik.handleBlur}
// // value={Formik.values.email}
// // error={Formik.error.email}
