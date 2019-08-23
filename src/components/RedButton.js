import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  height: 35px;
  width: 120px;
  background-color: #0ae5f5;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  margin: 10px;
  border: none;
`;

function RedButton({ onClick, text, dis }) {
  return (
    <StyledButton onClick={onClick} disabled={dis}>
      {text}
    </StyledButton>
  );
}

RedButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  dataCy: PropTypes.string,
  dis: PropTypes.bool
};

export default RedButton;
