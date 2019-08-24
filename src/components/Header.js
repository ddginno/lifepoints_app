import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ButtonLink from "./ButtonLink";
//import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

const HeaderStyle = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0%;
  z-index: 1;
  padding-left: 10px;
  height: 80px;
  width: 100%;
  background-color: transparent;
  background-image: linear-gradient(to bottom, black 20%, transparent 150%);
`;

const Kreis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  border: solid 2px #0ae5f5;
  height: 70px;
  width: 70px;
`;
const Icon = styled.div`
  position: absolute;
  left: 10px;
  color: white;
`;
function Header({ text }) {
  return (
    <HeaderStyle>
      <Icon> {text && <ButtonLink to="/news">{text}</ButtonLink>}</Icon>

      <Kreis>
        <Logo />
      </Kreis>
    </HeaderStyle>
  );
}
export default Header;
