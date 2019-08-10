import React from "react";
import styled from "styled-components";
import { getNewsById } from "../services";
import Header from "../components/Header";

const NewsDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #404447;
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

  margin: 0px;
  background-image: linear-gradient(to bottom, transparent 0%, black 150%);
`;

const StyledDescription = styled.div`
  width: 100vw;
  height: auto;
  border: 2px solid #0ae5f5;
  padding: 5px 5px 5px 10px;
  color: white;
`;

const ContentVideo = styled.div`
  width: "100%";
  height: "auto";
`;

const LikeArea = styled.div`
  display: flex;
  width: auto;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
const StyleButton = styled.button`
  width: 60px;
  height: 60px;
  border: solid 2px #0ae5f5;
  font-size: 35px;
  margin: 0px 2px;
`;

function NewsDetails({ match }) {
  const [showNews, setShowNews] = React.useState([]);
  console.log(match.params.id);
  React.useEffect(() => {
    loadNews();
  }, []);

  function loadNews() {
    getNewsById(match.params.id).then(result => {
      setShowNews(result);
    });
  }

  return (
    <NewsDetailsStyled>
      <Header />

      <ContentImageCard src={showNews.imageContent} />
      <ContentContainer>
        <StyledTitle>{showNews.titleContent}</StyledTitle>
        <StyledSubtitle>{showNews.subtitleContent}</StyledSubtitle>
      </ContentContainer>
      <StyledDescription>{showNews.description}</StyledDescription>
      <LikeArea>
        <StyleButton>
          <i class="far fa-thumbs-up" />
        </StyleButton>
        <StyleButton>
          <i class="far fa-thumbs-down" />
        </StyleButton>
      </LikeArea>

      <ContentVideo>
        <iframe title="youtube" width="375" height="265" src={showNews.video} />
      </ContentVideo>
    </NewsDetailsStyled>
  );
}

export default NewsDetails;
