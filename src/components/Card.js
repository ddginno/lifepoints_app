import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ContenImageCard from "./ContentImageCard";

const StyledCard = styled.div`
  padding: 2px;
  background: #6d7278;
  width: 100vw;
  border: 2px solid #979797;
  border-radius: 1px;
  position: relative;
`;

const StyledTitle = styled.p`
  color: white;
`;

function Card() {
  return (
    <StyledCard>
      <ContenImageCard />
      <StyledTitle>NIKES NEUER SUPER SCHUH DER SUPERLATIVE</StyledTitle>
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
export default Card;
