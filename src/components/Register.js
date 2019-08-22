import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import RegisterForm from "../components/RegisterForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0ae5f5;
`;

const Header = styled.div`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100vw;
  height: 80px;
  margin-top: 15px;
  margin-bottom: 100px;
  font-size: 45px;
`;

function Register({ onCreateProfile }) {
  return (
    <Container>
      <Header>Register</Header>
      <RegisterForm onCreateProfile={onCreateProfile} />
    </Container>
  );
}

Register.propTypes = {
  onCreateProfile: PropTypes.func
};

export default Register;
