import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: auto;
`;

function ContenImageCard() {
  return (
    <>
      <Img src="/Nike.jpg" />
    </>
  );
}

export default ContenImageCard;
