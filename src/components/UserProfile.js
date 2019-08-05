import React from "react";
import styled from "styled-components";

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 2px #0ae5f5;
`;

const ProfileRankStyle = styled.img`
  width: 30px;
`;

const ShopProfilePoints = styled.div``;

const ProfileDisplay = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: yellow;
  justify-content: space-between;
  align-items: center;
`;

function UserProfile() {
  return (
    <ProfileDisplay>
      <ProfileImage
        alt="UserImage"
        src="https://pbs.twimg.com/profile_images/986998593973301254/CD0R8DE3_400x400.jpg"
      />
      <div>
        <p>Neo der Auserwählte</p>
        <ShopProfilePoints>250/1000</ShopProfilePoints>
      </div>
      <ProfileRankStyle
        alt="UserImage"
        src="https://image.shutterstock.com/image-vector/military-rank-icon-trendy-flat-260nw-1219236889.jpg"
      />
    </ProfileDisplay>
  );
}

export default UserProfile;
