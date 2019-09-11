import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Track = styled.div`
  width: 100%;
  height: 10px;
  background-color: #222;
  border-radius: 8px;
  box-shadow: inset 0 0 5px #000;
`;

const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #0ae5f5;
  border-radius: 8px;
`;

export default class ProgressBar extends React.Component {
  clamp = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  };
  render() {
    return (
      <Track>
        <Thumb percentage={this.clamp(0, this.props.percentage, 100)} />
      </Track>
    );
  }
}

ProgressBar.propTypes = {
  percentage: PropTypes.number
};
