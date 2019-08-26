import React from "react";
import styled from "styled-components";
import { getNewsById, patchUser, getUser, patchNews } from "../services";
import Header from "../components/Header";

const NewsDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #404447;
  width: 100%;
  height: 100%;
  border-radius: 1px;
  position: relative;
  margin-bottom: 5px;
  overflow: auto;
`;

const StyledTitle = styled.p`
  color: #0ae5f5;
  margin-bottom: 0px;
  margin-top: 2px;
  font-size: 20px;
  padding-top: 10px;
  padding-left: 10px;
`;
const StyledSubtitle = styled.p`
  color: white;
  margin-top: 1px;
  font-size: 18px;
  padding-left: 10px;
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
  background-image: linear-gradient(to bottom, transparent 0%, black 150%);
`;

const StyledDescription = styled.div`
  width: 100vw;
  height: auto;

  padding: 10px 10px 10px 20px;
  color: white;
  margin-bottom: 25px;
`;

const ContentVideo = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-bottom: 20px;
`;

const LikeArea = styled.div`
  display: flex;
  width: auto;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
const StyleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;

  font-size: 35px;
  margin-bottom: 25px;
  margin-top: 25;
  & :disabled {
    color: red;
  }
`;

const StyleBackButton = styled.div`
  position: top, left;
  height: 30px;
  width: 30px;
  font-size: 30px;
  width: 20px;
  height: 20px;
  color: #0ae5f5;
  background-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 80px auto;
`;

const StyledIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function NewsDetails({ match, activeUser }) {
  const [showNews, setShowNews] = React.useState([]);
  const [Points, setPoints] = React.useState([]);
  const [disabled, setDisabled] = React.useState(false);
  const CurrentUserId = activeUser._id;
  /* eslint-disable*/
  React.useEffect(() => {
    setDisabled(
      showNews.likedByUsers && showNews.likedByUsers.includes(CurrentUserId)
    );
  }, [showNews.likedByUsers]);

  React.useEffect(() => {
    loadPoints();
  }, []);
  function loadPoints() {
    getUser().then(result => {
      const index = result.findIndex(user => user._id === CurrentUserId);
      const user = result[index];
      setPoints(user.userPoints);
    });
  }

  React.useEffect(() => {
    function loadNews() {
      getNewsById(match.params.id).then(result => {
        setShowNews(result);
      });
    }

    loadNews();
  }, [match.params.id]);
  /* eslint-disable*/
  function handleClick(event) {
    const id = showNews._id;

    event.preventDefault();
    setDisabled(true);
    patchUser(
      {
        userPoints: Points + showNews.points
      },
      CurrentUserId
    );
    patchNews({
      likedByUser: CurrentUserId,
      id: id
    });

    return;
  }

  return (
    <Grid>
      <div>
        <Header
          text={
            <StyleBackButton>
              <i className="fas fa-chevron-left" />
            </StyleBackButton>
          }
        />
      </div>

      <NewsDetailsStyled>
        <ContentImageCard src={showNews.imageContent} />
        <ContentContainer>
          <StyledTitle>{showNews.titleContent}</StyledTitle>
          <StyledSubtitle>{showNews.subtitleContent}</StyledSubtitle>
        </ContentContainer>
        <StyledDescription>{showNews.description}</StyledDescription>
        <LikeArea>
          <StyleButton
            disabled={disabled}
            value={showNews._id}
            onClick={handleClick}
          >
            <i className="far fa-thumbs-up"></i>
          </StyleButton>

          <StyleButton disabled={disabled} onClick={handleClick}>
            <i className="far fa-thumbs-down"></i>
          </StyleButton>
        </LikeArea>

        <ContentVideo>
          <StyledIFrame src={showNews.video} frameborder="0" allowfullscreen />
        </ContentVideo>
      </NewsDetailsStyled>
    </Grid>
  );
}

export default NewsDetails;
