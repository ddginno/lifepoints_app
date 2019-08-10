import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";
import { postNews, postShop, postUser } from "../services";

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  background-color: #6d7278;
`;

const StyleInput = styled.input`
  background-color: #d8d8d8;
  margin-bottom: 3px;
  padding-top: 3px;
  font-size: 13px;
`;

const CardInputDescription = styled.textarea`
  background-color: #d8d8d8;
  height: 120px;
  margin-bottom: 3px;
  font-size: 13px;
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

function CreateContent({ history }) {
  function handleSubmitNews(event) {
    event.preventDefault();

    const form = event.target;
    const newsData = {
      titleContent: form.titleContent.value,
      subtitleContent: form.subtitleContent.value,
      description: form.description.value,
      imageContent: form.imageContent.value,
      video: form.video.value,
      points: form.points.value
    };

    postNews(newsData);

    history.replace("/");
    console.log(newsData);
  }

  function handleSubmitShop(event) {
    event.preventDefault();

    const formShop = event.target;
    const shopData = {
      shopTitle: formShop.shopTitle.value,
      shopImg: formShop.shopImg.value,
      shopPoints: formShop.shopPoints.value
    };
    postShop(shopData);
    history.replace("/shop");
    console.log(shopData);
  }
  function handleSubmitUser(event) {
    event.preventDefault();

    const formUser = event.target;
    const userData = {
      userName: formUser.userName.value,
      userImg: formUser.userImg.value,
      userPoints: formUser.userPoints.value
    };
    postUser(userData);
    history.replace("/news");
    console.log(userData);
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
              name="description"
              placeholder="Text eingeben..."
            />
            <StyleInput name="imageContent" placeholder="Bild hochladen..." />
            <StyleInput name="video" placeholder="Video hochladen..." />
            <StyleInput name="points" placeholder="Punkte eingeben..." />
          </Input>
          <SendButton>Send</SendButton>
        </form>
        <BackendTitle>SHOP</BackendTitle>

        <form onSubmit={handleSubmitShop}>
          <Input>
            <StyleInput name="shopTitle" placeholder="Haupttitle eingeben..." />
            <StyleInput name="shopImg" placeholder="Bild hochladen..." />
            <StyleInput name="shopPoints" placeholder="Punkte eingeben..." />
          </Input>
          <SendButton>Send</SendButton>
        </form>
        <BackendTitle>USER</BackendTitle>
        <form onSubmit={handleSubmitUser}>
          <Input>
            <StyleInput name="userName" placeholder="Name eingeben..." />
            <StyleInput name="userImg" placeholder="Bild hochladen..." />
            <StyleInput name="userPoints" placeholder="Punkte eingeben..." />
          </Input>
          <SendButton>Send</SendButton>
        </form>
      </InputStyle>
    </>
  );
}

export default CreateContent;
