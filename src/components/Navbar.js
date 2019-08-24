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
  
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-image: linear-gradient(to bottom, transparent 0%, black 20%);*/
`;

const HeaderLink = styled(Link)`
  float: left;
  color: whitesmoke;
  text-align: center;
  text-decoration: none;
  font-size: 28px;
  margin: 18px;
  &:hover {
    color: #0ae5f5;
  }
`;

function Navbar({ links }) {
  return (
    <HeaderNav>
      {links.map(link => (
        <HeaderLink key={link.to} to={link.to}>
          <i className={`fas ${link.icon}`} />
          <NavTitle>{link.title}</NavTitle>
        </HeaderLink>
      ))}
    </HeaderNav>
  );
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired
};

export default Navbar;
