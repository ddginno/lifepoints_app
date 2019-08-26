import React from "react";
import QRCode from "qrcode.react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import SubHeader from "../components/SubHeader";

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 70px auto 60px;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  padding-top: 200px;
  justify-content: center;
  align-content: center;
`;

const QrBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 255px;
  height: 255px;
  background-color: aqua;
  border-radius: 2px;
`;

const StyleButtonIcon = styled.div`
  color: #0ae5f5;
  margin-right: 5px;
`;

function QrCode({ activeUser }) {
  return (
    <Grid>
      <div>
        <SubHeader>
          <StyleButtonIcon>
            <i className="fas fa-qrcode" />
          </StyleButtonIcon>
          <div>MEMBERCARD</div>
        </SubHeader>
      </div>

      <Content>
        <QrBackground>
          <QRCode size={250} value={activeUser._id} />
        </QrBackground>
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
