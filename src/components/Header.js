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

  height: 80px;
  width: 100%;
  background-color: #0ae5f5;
  background-image: linear-gradient(to bottom, #0ae5f5 0%, black 150%);
`;

const Kreis = styled.div`
  background-color: black;
  border-radius: 50%;

  height: 70px;
  width: 70px;
  padding-top: 5px;
  padding-left: 4px;
`;
const Icon = styled.div`
  position: absolute;
  left: 10px;
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
