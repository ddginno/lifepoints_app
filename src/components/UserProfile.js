import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getUser } from "../services";
import ProgressBar from "../components/ProgressBar";

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 2px #0ae5f5;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.75);
  object-fit: cover;
`;

const ProfileRankStyle = styled.img`
  width: 30px;
  object-fit: cover;
`;

const ShopProfilePoints = styled.div`
  padding-left: auto;
  font-size: 8px;
`;

const ProfileDisplay = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: transparent 50%;
  background-image: linear-gradient(to bottom, black 20%, transparent 150%);
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px 10px;
  z-index: 1;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.5s ease;
`;

const ProgressBarContainer = styled.div`
  background-color: #979797;
  width: 100%;
  height: 8px;
  border-radius: 5px;
`;
const Progress = styled.div`
  background-color: #0ae5f5;
  width: 25%;
  height: 100%;
  border-radius: 5px;
`;

const Pointsview = styled.div`
  margin: 0px;
  font-size: 15px;
`;

const RankFont = styled.div`
  font-size: 12px;
  text-align: center;
`;

const ProfileContentRight = styled.div`
  margin: 0px;
`;

const ProfileContentMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function UserProfile({ activeUser }) {
  const [scrollState, setScrollState] = React.useState({
    visible: true,
    prevScrollpos: window.pageYOffset
  });

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    setScrollState({
      visible: scrollState.prevScrollpos > currentScrollPos,
      prevScrollpos: currentScrollPos
    });
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [userData, setUserData] = React.useState([]);
  /* eslint-disable*/
  React.useEffect(() => {
    getUser().then(result => {
      const User = result
        .sort(function(a, b) {
          return b.userPoints - a.userPoints;
        })
        .map((user, index) => {
          return {
            ...user,
            rank: index + 1
          };
        })
        .find(user => user._id === activeUser._id);

      setUserData(User);
    });
  }, []);
  /* eslint-disable*/

  return (
    <ProfileDisplay visible={scrollState.visible}>
      <ProfileImage alt="UserImage" src={userData.userImg} />
      <ProfileContentMid>
        <div>{userData.userName}</div>
        <Pointsview>
          <i className="fas fa-star" />
          {userData.userPoints}
        </Pointsview>
        <ProgressBarContainer>
          <ProgressBar percentage={userData.userPoints} />
        </ProgressBarContainer>
        <ShopProfilePoints>{userData.userPoints}/10000</ShopProfilePoints>
      </ProfileContentMid>
      <ProfileContentRight>
        <ProfileRankStyle alt="UserImage" src="../img/LPSOFTPINK.png" />
        <RankFont>{userData.rank}</RankFont>
      </ProfileContentRight>
    </ProfileDisplay>
  );
}

UserProfile.prototype = {
  userName: PropTypes.string.isRequired,
  userPoints: PropTypes.string.isRequired,
  userRank: PropTypes.string.isRequired
};

export default UserProfile;
