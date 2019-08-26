import React from "react";
import styled from "styled-components";

const LogoElement = styled.img`
  width: 35px;
  padding-bottom: 10px;
`;

const Logo = () => (
  <LogoElement alt="lifepointslogo" src="../img/LP-LOGODETAIL.png" />
);

export default Logo;
