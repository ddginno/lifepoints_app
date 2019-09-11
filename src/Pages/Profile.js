import React from "react";
import styled from "styled-components";
import { getUser } from "../services";
import SubHeader from "../components/SubHeader";
import ButtonLink from "../components/ButtonLink";

const StyleButtonIcon = styled.div`
  color: #0ae5f5;
  margin-right: 5px;
`;

const ProfileDisplay = styled.div`
  display: grid;
  grid-template-rows: 70px auto 70px;
  height: 100vh;
  color: white;
`;

const Test = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

const Icon = styled.div`
  position: absolute;
  left: 10px;
  color: white;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 2px #0ae5f5;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.75);
  object-fit: cover;
`;

function Profile(activeUser) {
  console.log(activeUser);
  //   React.useEffect(() => {
  //     getUser().then(result => {
  //       const User = result
  //         .sort(function(a, b) {
  //           return b.userPoints - a.userPoints;
  //         })
  //         .map((user, index) => {
  //           return {
  //             ...user,
  //             rank: index + 1
  //           };
  //         })
  //         .find(user => user._id === activeUser._id);

  //       console.log(User);
  //     });
  //   }, []);

  return (
    <ProfileDisplay>
      <SubHeader>
        <StyleButtonIcon>
          <i class="fas fa-user"></i>
        </StyleButtonIcon>
        <div>PROFILE</div>
      </SubHeader>
      <Test>
        <ProfileImage alt="UserImage" src={activeUser.activeUser.userImg} />
      </Test>
      <div>NAV</div>
    </ProfileDisplay>
  );
}

// UserProfile.prototype = {
//   userName: PropTypes.string.isRequired,
//   userPoints: PropTypes.string.isRequired,
//   userRank: PropTypes.string.isRequired
//};

export default Profile;
