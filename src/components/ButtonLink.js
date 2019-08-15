import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonLink({ children, to, ...other }) {
  return (
    <Link to={to}>
      <button {...other}>{children}</button>
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired
};

export default ButtonLink;
