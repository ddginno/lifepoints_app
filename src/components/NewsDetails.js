import React from "react";
import styled from "styled-components";
import { getNews } from "../services";

import PropTypes from "prop-types";

const NewsDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #6d7278;
  width: 100%;
  border-radius: 1px;
  position: relative;
  margin-bottom: 5px;
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
  padding: 5px 5px 5px 10px;
  font-family: sans-serif;
  border: 2px solid #979797;
  margin: 0px;
`;

const StyledDescription = styled.div`
  width: 100vw;
  height: auto;
`;

const LikeArea = styled.div``;
const ContentVideo = styled.div``;

function NewsDetails({
  titleContent,
  subtitleContent,
  imageContent,
  descriptionContent,
  videoContent
}) {
  const [showNews, setShowNews] = React.useState([]);

  React.useEffect(() => {
    getNews().then(result => {
      const cards = result;
      console.log(cards);
      setShowNews(cards);
    });
  }, []);

  return (
    <NewsDetailsStyled>
      <ContentImageCard src={imageContent} />
      <ContentContainer>
        <StyledTitle>{titleContent}</StyledTitle>
        <StyledSubtitle>{subtitleContent}</StyledSubtitle>
      </ContentContainer>
      <StyledDescription>{descriptionContent}</StyledDescription>
      <LikeArea>
        <button>1</button>
        <button>2</button>
      </LikeArea>
      <ContentVideo src={videoContent} />
    </NewsDetailsStyled>
  );
}
NewsDetails.propTypes = {
  imageContent: PropTypes.string.isRequired,
  titleContent: PropTypes.string.isRequired,
  subtitleContent: PropTypes.string.isRequired,
  descriptionContent: PropTypes.string.isRequired,
  videoContent: PropTypes.string.isRequired
};

export default NewsDetails;
