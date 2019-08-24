import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyleButton = styled.div`
  height: 30px;
  width: 30px;
`;

function ButtonLink({ children, to, ...other }) {
  return (
    <Link to={to}>
      <StyleButton {...other}>{children}</StyleButton>
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired
};

export default ButtonLink;
