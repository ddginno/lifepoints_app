import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleInput = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
`;

const CardInputDescription = styled.textarea`
  background-color: #d8d8d8;
  height: 200px;
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

function CreateContent({ history, onCreate }) {
  function handleSubmitNews(event) {
    event.preventDefault();

    const form = event.target;
    const newsCard = {
      titleContent: form.titleContent.value,
      subtitleContent: form.subtitleContent.value,
      desciption: form.desciption.value,
      imageContent: form.imageContent.value,
      video: form.video.value,
      points: form.points.value
    };
    onCreate(newsCard);
    history.replace("/");
    console.log(newsCard);
  }
  function handleSubmitShop(event) {
    event.preventDefault();

    const formShop = event.target;
    const shopCard = {
      shopTitle: formShop.shopTitle.value,
      shopImg: formShop.shopimg.value
    };

    console.log(shopCard);
  }

  return (
    <>
      <InputStyle>
        <BackendTitle>News</BackendTitle>
        <form onSubmit={handleSubmitNews}>
          <Input>
            <StyleInput
              name="titleContent"
              placeholder="Haupttitle eingeben..."
            />
            <StyleInput
              name="subtitleContent"
              placeholder="Untertitle eingeben..."
            />
            <CardInputDescription
              name="desciption"
              placeholder="Text eingeben..."
            />
            <StyleInput name="imageContent" placeholder="Bild hochladen..." />
            <StyleInput name="video" placeholder="Video hochladen..." />
            <StyleInput name="points" placeholder="Punkte eingeben..." />
          </Input>
          <SendButton type="submit">Send</SendButton>
        </form>
        <BackendTitle>SHOP</BackendTitle>

        <form onSubmit={handleSubmitShop}>
          <StyleInput name="shopTitle" placeholder="Haupttitle eingeben..." />
          <StyleInput name="shopImg" placeholder="Bild hochladen..." />
          <SendButton type="submit">Send</SendButton>
        </form>
      </InputStyle>
    </>
  );
}

export default CreateContent;
