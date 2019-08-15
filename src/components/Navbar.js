import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavTitle = styled.p`
  font-size: 12px;
  padding: 2px;
  margin: 0px;
`;

const HeaderNav = styled.header`
  height: 60px;
  border-top: 2px solid #979797;
  background: #404447;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const HeaderLink = styled(Link)`
  float: left;
  color: whitesmoke;
  text-align: center;
  text-decoration: none;
  font-size: 28px;
  margin: 18px;
  &:active {
    color: #0ae5f5;
  }
`;

function Navbar({ links }) {
  return (
    <HeaderNav>
      {links.map(({ to, icon, title }) => (
        <HeaderLink key={to} to={to}>
          <i className={`fas ${icon}`} />
          <NavTitle>{title}</NavTitle>
        </HeaderLink>
      ))}
    </HeaderNav>
  );
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired
};

export default Navbar;
