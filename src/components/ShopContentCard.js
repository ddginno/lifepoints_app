import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #6d7278;
  width: 100%;
  border-radius: 1px;
  position: relative;
  margin-bottom: 5px;
`;
const StyledTitle = styled.p`
  color: #0ae5f5;
  margin-bottom: 0px;
  margin-top: 1px;
`;
const DisplayPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: white;
  border-radius: 50%;
  border: solid 2px #0ae5f5;
  background-color: Black;
`;

const ContentImageCard = styled.img`
  box-sizing: border-box;
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "100%"};
  border: 2px solid #979797;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 5px 10px;
  font-family: sans-serif;
  border: 2px solid #979797;
  margin: 0px;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  color: white;
  font-size: 17px;
  background-color: #0ae5f5;
`;

function ShopContentCard({
  shopTitle,
  shopPoints,
  shopImg,
  handleClick,
  id,
  ...props
}) {
  return (
    <StyledCard {...props}>
      <ContentImageCard src={shopImg} />
      <ContentContainer>
        <StyledTitle>{shopTitle}</StyledTitle>
        <DisplayPoints>{shopPoints}</DisplayPoints>
      </ContentContainer>
      <StyledButton id={id} onClick={handleClick}>
        Gib mir das
      </StyledButton>
    </StyledCard>
  );
}
ShopContentCard.propTypes = {
  shopTitle: PropTypes.string.isRequired,
  shopPoints: PropTypes.string.isRequired,
  shopImg: PropTypes.string.isRequired
};

export default ShopContentCard;
