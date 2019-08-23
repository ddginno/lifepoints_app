import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GreyButton from "../components/GreyButton";

const Logo = styled.div`
  display: flex;

  justify-content: center;

  height: 12px;
  margin-top: 40px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-rows: 280px 70px 1fr;
  width: 100%;
  height: 100vh;
  background-color: Black;
`;

const LogoPng = styled.img`
  height: 200px;
  color: #fff8f0;
  text-shadow: 1px 1px 2px black, 0 0 5px #fff8f0;
`;

const StyledButton = styled.button`
  margin: 5px;
  width: 90px;
  height: 40px;
  color: white;
  border-radius: 20px;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  border: solid 2px #0ae5f5;
`;

const Form = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 1fr;
`;

const StyledInput = styled.input`
  margin: 5px;
  padding: 10px;
  width: 80%;
  border-radius: 20px;
  color: white;
  background: black;
`;

const StyledError = styled.div`
  margin: 5px 20px;
  padding: 5px;
  /* background: orangered; */
  border: 2px solid red;
  border-radius: 3px;
`;

const Sub = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  color: #0ae5f5;
  font-size: 20px;
  font-variant: small-caps;
`;

function Login({ onLogin, history, activeUser, ...props }) {
  const [userName, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  function handleUsernameChange(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function validate() {
    const errors = {};

    if (userName.trim() === "") {
      errors.userName = "Please put in a valid username";
    }
    if (password.length === 0) {
      errors.password = "Please put in a valid password";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

    try {
      if (
        activeUser.userName === userName &&
        activeUser.password === password
      ) {
        history.replace("/news");
      } else {
        alert("wrong password");
      }
    } catch (e) {}
  }

  return (
    <Layout>
      <Logo>
        <LogoPng src="../img//LP-LOGO2.png" />
      </Logo>
      <Sub>-FOR A BETTER LIFE-</Sub>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          name="userName"
          value={userName}
          placeholder="Benutzername"
          type="text"
          onChange={handleUsernameChange}
        />
        {errors.userName && <StyledError>{errors.userName}</StyledError>}
        <StyledInput
          name="pw"
          value={password}
          placeholder="Enter your password"
          type="password"
          onChange={handlePasswordChange}
        />
        {errors.password && <StyledError>{errors.password}</StyledError>}
        <StyledButton type="submit" onClick={() => onLogin(userName)}>
          Login
        </StyledButton>
        <Link to="/register">
          <GreyButton text="Register" />
        </Link>
      </Form>
    </Layout>
  );
}

export default Login;
