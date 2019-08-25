import React from "react";
import styled from "styled-components";
import { getUser } from "../services";
import HeaderRanking from "../components/HeaderRanking";
import Navbar from "../components/Navbar";

const RankDark = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  height: 75px;
  background-color: #404447;
  margin-top: 1px;
`;

const RankBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;

  width: 30px;
  height: 60px;
  background-color: #0ae5f5;
  margin-right: 40px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.75);

  border-radius: 0 3px 3px 0;
`;

const StarIcon = styled.div`
  color: #0ae5f5;
`;

const UserPoins = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.75);
  object-fit: cover;
`;

const ProfileRankStyle = styled.img`
  position: absolute;
  width: 35px;
  right: 10px;
`;

const DataUser = styled.div`
  margin: 20px 25px;
  color: white;
`;

const StyleButtonIcon = styled.div`
  color: #0ae5f5;
  margin-right: 5px;
`;

const RankContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 60px auto 50px;
`;
const Content = styled.div`
  height: 100%;
  overflow-y: auto;
`;
function Ranking() {
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    getUser().then(result => {
      const allUser = result
        .sort(function(a, b) {
          return b.userPoints - a.userPoints;
        })
        .slice(0, 16)
        .map((user, index) => {
          return {
            ...user,
            rank: index + 1
          };
        });

      setUserData(allUser);
    });
  }, []);

  function RenderUser(userData) {
    return (
      <RankDark key={userData.rank}>
        <RankBox>{userData.rank}</RankBox>
        <UserImage src={userData.userImg} />
        <DataUser>
          <div>{userData.userName}</div>
          <UserPoins>
            <StarIcon>
              <i className="fas fa-star" />
            </StarIcon>
            {userData.userPoints}
          </UserPoins>
        </DataUser>
        <ProfileRankStyle alt="UserImage" src="../img/LPSOFTPINK.png" />
      </RankDark>
    );
  }
  return (
    <Grid>
      <div>
        <HeaderRanking>
          <StyleButtonIcon>
            <i className="fas fa-trophy" />
          </StyleButtonIcon>
          <div>LEADERBOARD</div>
        </HeaderRanking>
      </div>
      <Content>
        <RankContainer>{userData.map(RenderUser)}</RankContainer>
      </Content>

      <div>
        <Navbar
          links={[
            { to: "/news", icon: "fa-newspaper", title: "News" },
            { to: "/qrcode", icon: "fa-qrcode", title: "Qrcode" },
            { to: "/ranking", icon: "fa-trophy", title: "Ranking" },
            { to: "/shop", icon: "fa-shopping-cart", title: "Shop" }
          ]}
        />
      </div>
    </Grid>
  );
}
export default Ranking;
