import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import RegisterForm from "../components/RegisterForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
  color: #0ae5f5;
  font-family: sans-serif;
  background-color: black;
`;

function Register({ onCreateProfile }) {
  return (
    <Container>
      <Header>REGISTER</Header>
      <RegisterForm onCreateProfile={onCreateProfile} />
    </Container>
  );
}

Register.propTypes = {
  onCreateProfile: PropTypes.func
};

export default Register;
