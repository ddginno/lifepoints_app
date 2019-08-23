import React from "react";
import QRCode from "qrcode.react";
import Headers from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 80px auto 60px;
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function QrCode({ activeUser }) {
  return (
    <Grid>
      <div>
        <Headers />
      </div>
      <Content>
        <QRCode size={250} value={activeUser._id} />
      </Content>
      <Navbar
        links={[
          { to: "/news", icon: "fa-newspaper", title: "News" },
          { to: "/qrcode", icon: "fa-qrcode", title: "Qrcode" },
          { to: "/ranking", icon: "fa-trophy", title: "Ranking" },
          { to: "/shop", icon: "fa-shopping-cart", title: "Shop" }
        ]}
      />
    </Grid>
  );
}
export default QrCode;
