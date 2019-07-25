import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  padding: 18px;
  background: #6d7278;
  border: 2px solid #979797;
  border-radius: 1px;
  position: relative;
`;

function Card() {
  return (
    <StyledCard>
      <img />
      <title />
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
export default Card;
