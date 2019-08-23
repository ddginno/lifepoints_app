import React from "react";
import styled from "styled-components";
import axios from "axios";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RedButton from "./RedButton";
import GreyButton from "./GreyButton";

import { postUser } from "../services";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const PlaceholderImg = styled.img`
  width: auto;
  height: 150px;
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
const Label = styled.label`
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  background-color: black;
  display: inline-block;
  padding: 5px;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0776b8;
  opacity: 0.6;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 0px 15px 30px 15px;
  background-color: black;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.75);
  input,
  select {
    font-size: 16px;
    width: 80vw;
    border: grey solid 1px;
    padding: 5px 5px 5px 10px;
    border-radius: 15px;
    background-color: black;
    border: solid 2px #0ae5f5;
    margin-bottom: 10px;
    color: white;
  }
  label {
    font-size: 18px;
    margin: 10px 10px 0px 10px;
  }
  button {
    display: block;
    align-self: center;
  }
  a {
    align-self: center;
  }
  .smallinput {
    width: 30%;
  }
`;

const StyledError = styled.div`
  background-color: #ff5666;
  padding: 5px;
  margin: 5px;
`;

const PasswordInput = styled.input`
  &:focus {
    background: hsl(
      ${props => Math.min(props.value.length * 10, 100)},
      60%,
      60%
    );
    color: black;
  }
`;

function RegisterForm({ onCreateProfile, history }) {
  const [newProfile, setNewProfile] = React.useState({
    _id: "",
    userName: "",
    password: "",
    email: "",
    userImg: "",
    purchases: []
  });
  const [image, setImage] = React.useState("");
  const [errors, setErrors] = React.useState({});

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNewProfile({
      ...newProfile,
      [name]: value
    });
  }

  function validate() {
    const errors = {};

    if (newProfile.userName.trim() < 3) {
      errors.userName =
        "Please put in a username with at least three characters";
    }
    if (newProfile.password.length < 7) {
      errors.password = "The password must contain at least seven characters";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

    const userData = {
      userName: newProfile.userName,
      password: newProfile.password,
      email: newProfile.email,
      userImg: image,
      purchases: []
    };

    postUser(userData);
    history.replace("/login");
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <div>
          {image ? (
            <img
              src={image}
              alt=""
              style={{ width: "auto", height: "310px", margin: "15px" }}
            />
          ) : (
            <>
              <Input type="file" id="file" name="file" onChange={upload} />
              <Label htmlFor="file">
                <PlaceholderImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
              </Label>
            </>
          )}
        </div>

        <label>Username</label>
        <input
          placeholder="Username"
          name="userName"
          value={newProfile.username}
          onChange={handleChange}
          error={errors.username}
        />
        {errors.userName && <StyledError>{errors.userName}</StyledError>}

        <label>E-Mail</label>
        <input
          placeholder="E-Mail"
          type="email"
          name="email"
          value={newProfile.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <PasswordInput
          placeholder="Password"
          type="password"
          name="password"
          value={newProfile.password}
          onChange={handleChange}
          error={errors.password}
        />
        {errors.password && <StyledError>{errors.password}</StyledError>}
        <RedButton text="Register now" type="submit" />
        <ButtonContainer>
          <Link to="/login">
            <GreyButton text="Back" />
          </Link>
        </ButtonContainer>
      </FormContainer>
    </form>
  );
}

RegisterForm.propTypes = {
  onCreateProfile: PropTypes.func
};

export default withRouter(RegisterForm);
