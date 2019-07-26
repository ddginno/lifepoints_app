import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  background: #6d7278;
  width: 100%;

  border-radius: 1px;
  position: relative;
`;

const StyledTitle = styled.p`
  color: #0ae5f5;
  margin-bottom: 0px;
  margin-top: 1px;
`;
const StyledSubtitle = styled.p`
  color: white;
  margin-top: 1px;
`;

const ContentImageCard = styled.img`
  box-sizing: border-box;
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "100%"};
  border: 2px solid #979797;
`;

const ContentContainer = styled.div`
  padding-left: 10px;
  font-family: sans-serif;
  border: 2px solid #979797;
  margin: 0px;
`;

function Card({ titleContent, subtitleContent }) {
  return (
    <StyledCard onClick>
      <ContentImageCard alt="" src="Nike.jpg" />
      <ContentContainer>
        <StyledTitle>{titleContent}</StyledTitle>
        <StyledSubtitle>{subtitleContent}</StyledSubtitle>
      </ContentContainer>
    </StyledCard>
  );
}

Card.propTypes = {
  titleContent: PropTypes.string.isRequired,
  subtitleContent: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};
export default Card;
