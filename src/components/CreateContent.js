import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardInputTitle = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
`;
const CardInputSubtitle = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
`;
const CardInputDescription = styled.textarea`
  background-color: #d8d8d8;
  height: 200px;
  margin-bottom: 3px;
`;
const CardInputImg = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
`;
const CardInputVideo = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
`;
const CardInputPoints = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
`;

const BackendTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #6d7278;
  border: solid 2px #0ae5f5;
  color: white;
  box-shadow: 3px 3px 3px black;
  margin: 20px 0px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  color: white;
`;

const SendButton = styled.button`
  align-self: flex-end;
  width: 80px;
  height: 20px;
  background-color: #0ae5f5;
`;

const ShopCardInputTitle = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
`;
const ShopCardInputImg = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
`;

function CreateContent() {
  return (
    <>
      <InputStyle>
        <BackendTitle>News</BackendTitle>

        <Input>
          <CardInputTitle type="text" placeholder="Hauptitle eingeben..." />
          <CardInputSubtitle type="text" placeholder="Untertitle eingeben..." />
          <CardInputDescription type="text" placeholder="Text eingeben..." />
          <CardInputImg type="text" placeholder="Bild hochladen..." />
          <CardInputVideo type="text" placeholder="Video hochladen..." />
          <CardInputPoints type="text" placeholder="Punkte eingeben..." />
        </Input>
        <SendButton>Send</SendButton>

        <BackendTitle>SHOP</BackendTitle>

        <ShopCardInputTitle type="text" placeholder="Hauptitle eingeben..." />
        <ShopCardInputImg type="text" placeholder="Bild hochladen..." />
        <SendButton>Send</SendButton>
      </InputStyle>
    </>
  );
}

export default CreateContent;
