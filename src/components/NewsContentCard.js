import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #6d7278;
  width: 100%;
  border-radius: 1px;
  position: relative;
  margin-bottom: 20px;
`;

const StyledTitle = styled.p`
  color: #0ae5f5;
  margin-bottom: 0px;
  margin-top: 12px;
  font-size: 20px;
`;
const StyledSubtitle = styled.p`
  color: white;
  margin-top: 1px;
  font-size: 18px;
`;

const ContentImageCard = styled.img`
  box-sizing: border-box;
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "100%"};
`;

const ContentContainer = styled.div`
  padding: 5px 5px 5px 10px;
  font-family: sans-serif;

  margin: 0px;
  background-color: #0d2330;
`;

function NewsContentCard({
  titleContent,
  subtitleContent,
  imageContent,
  ...props
}) {
  return (
    <StyledCard {...props}>
      <ContentImageCard src={imageContent} />
      <ContentContainer>
        <StyledTitle>{titleContent}</StyledTitle>
        <StyledSubtitle>{subtitleContent}</StyledSubtitle>
      </ContentContainer>
    </StyledCard>
  );
}

NewsContentCard.propTypes = {
  imageContent: PropTypes.string.isRequired,
  titleContent: PropTypes.string.isRequired,
  subtitleContent: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};
export default NewsContentCard;
