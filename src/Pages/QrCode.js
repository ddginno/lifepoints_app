import React from "react";
import QRCode from "qrcode.react";

import Navbar from "../components/Navbar";
import styled from "styled-components";
import HeaderRanking from "../components/HeaderRanking";

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 70px auto 60px;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  margin-top: 200px;
  justify-content: center;
  align-content: center;
`;

const StyleButtonIcon = styled.div`
  color: #0ae5f5;
  margin-right: 5px;
`;

function QrCode({ activeUser }) {
  return (
    <Grid>
      <div>
        <HeaderRanking>
          <StyleButtonIcon>
            <i className="fas fa-qrcode" />
          </StyleButtonIcon>
          <div>MEMBERCARD</div>
        </HeaderRanking>
      </div>

      <Content>
        <QRCode size={250} value={activeUser._id} />
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
export default QrCode;
