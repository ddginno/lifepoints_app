import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  height: 35px;
  width: 120px;
  background-color: black;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  margin: 15px;
  border-bottom: solid 2px #0ae5f5;
  color: white;
`;

function GreyButton({ onClick, text, disabled }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
}

GreyButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default GreyButton;
