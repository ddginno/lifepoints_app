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
  top: 0;

  flex-grow: 0;
  flex-shrink: 0;

  height: 80px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 25px;
  color: white;
  font-family: sans-serif;
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
