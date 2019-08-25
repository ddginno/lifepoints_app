import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  margin-top: 35px;

  height: 37px;
  border-color: #0ae5f5;
  background-color: transparent;
  border-width: 2px;
  border-right-width: 2px;
  border-left-width: 2px;
  color: white;
  border-radius: 25px;
  flex-grow: 1;
  cursor: pointer;
  position: relative;
  color: #0ae5f5;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    &:after {
      right: 80%;
    }
    &:before {
      left: 80%;
    }
  }
  &:last-child {
    border-right-width: 3px;
  }
  &:first-child {
    border-left-width: 3px;
  }
  &:before,
  &:after {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    position: absolute;
    background-color: #333;
    transform: skewX(-45deg);
  }
  &:before {
    position: absolute;
    top: -2px;
    left: 10px;
    transition: left 0.1s linear;
  }
  &:after {
    bottom: -2px;
    right: 10px;
    transition: right 0.1s linear;
  }
`;

function BlueButton({ onClick, text, dis }) {
  return (
    <StyledButton onClick={onClick} disabled={dis}>
      {text}
    </StyledButton>
  );
}

BlueButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  dataCy: PropTypes.string,
  dis: PropTypes.bool
};

export default BlueButton;
