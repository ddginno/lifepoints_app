import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getUser } from "../services";

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 2px #0ae5f5;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.75);
`;

const ProfileRankStyle = styled.img`
  width: 30px;
`;

const ShopProfilePoints = styled.div`
  padding-left: auto;
  font-size: 8px;
`;

const ProfileDisplay = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
  width: 100%;
  height: 80px;
  background-color: gray;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px 5px;
  z-index: 1;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.5s ease;
`;

const ProgressBar = styled.div`
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

const ProfileContentMid = styled.div``;

function UserProfile() {
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

  const [userData, setUserData] = React.useState({});
  React.useEffect(() => {
    getUser().then(result => {
      const user = result && result[0];
      if (!user) {
        return;
      }

      setUserData(user);
    });
  }, []);

  return (
    <ProfileDisplay visible={scrollState.visible}>
      <ProfileImage alt="UserImage" src={userData.userImg} />
      <ProfileContentMid>
        <div>{userData.userName}</div>
        <Pointsview>
          <i className="fas fa-star" />
          {userData.userPoints}
        </Pointsview>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <ShopProfilePoints>250/1000</ShopProfilePoints>
      </ProfileContentMid>
      <ProfileContentRight>
        <ProfileRankStyle
          alt="UserImage"
          src="https://image.shutterstock.com/image-vector/military-rank-icon-trendy-flat-260nw-1219236889.jpg"
        />
        <RankFont>{userData.userRank}456</RankFont>
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
