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
  border-top: 2px solid #444;
  background: #6d7278;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index:1;
  
  /*opacity: ${props => (props.visible ? 2 : 2)};*/
  transition: all 0.5s ease;
`;

const HeaderLink = styled(Link)`
  float: left;
  color: whitesmoke;

  text-align: center;
  /* padding: 30px 9px; */
  text-decoration: none;
  font-size: 28px;
  margin: 18px;
  &:hover {
    color: #0ae5f5;
  }
`;

function Navbar({ links }) {
  const [scrollState, setScrollState] = React.useState({
    visible: true,
    prevScrollpos: window.pageYOffset
  });

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    setScrollState({
      visible: scrollState.prevScrollpos > currentScrollPos,
      prevScrollpos: currentScrollPos
    });
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollState]);

  return (
    <HeaderNav visible={scrollState.visible}>
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
