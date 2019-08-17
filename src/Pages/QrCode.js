import React from "react";
import QRCode from "qrcode.react";
import Headers from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
//import { getUserById } from "../services";

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

function QrCode() {
  return (
    <Grid>
      <div>
        <Headers />
      </div>
      <Content>
        <QRCode
          size="120"
          value="https://mysterious-sierra-56038.herokuapp.com"
        />{" "}
      </Content>
      <Navbar
        links={[
          { to: "/", icon: "fa-newspaper", title: "News" },
          { to: "/qrcode", icon: "fa-qrcode", title: "Qrcode" },
          { to: "/ranking", icon: "fa-trophy", title: "Ranking" },
          { to: "/shop", icon: "fa-shopping-cart", title: "Shop" },
          { to: "/backend", icon: "fa-users-cog", title: "Backend" }
        ]}
      />
    </Grid>
  );
}
export default QrCode;
