import React from "react";
import styled from "styled-components";
import axios from "axios";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BlueButton from "./BlueButton";
import GreyButton from "./GreyButton";

import { postUser } from "../services";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const PlaceholderImg = styled.img`
  width: auto;
  height: 100px;
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
  border-radius: 50%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: 0.6;
  margin-bottom: 20px;
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
  width: 300px;
  margin: 0px 15px 30px 15px;
  background-color: black;
  border: solid 3px #0ae5f5;
  border-radius: 10px;
  input {
    padding: 10px;
    width: 80%;
    border-radius: 20px;
    color: black;
    background-color: white;
  }

  select {
    font-size: 16px;
    width: 250px;
    border: grey solid 1px;
    padding: 5px 5px 5px 10px;
    border-radius: 15px;
    background-color: black;
    border-bottom: solid 2px #0ae5f5;
    margin-bottom: 10px;
    color: white;
  }

  label {
    font-size: 18px;
    margin: 5px 5px 0px 5px;
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
    userPoints: "",
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
      errors.userName = "Please put in a username";
    }
    if (newProfile.password.length < 7) {
      errors.password = "The password must contain at least seven characters";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  async function handleSubmit(event) {
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

    const result = await postUser(userData);
    console.log(result);
    onCreateProfile(result);
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
              style={{
                width: "250px",
                height: "250px",
                margin: "15px",
                borderRadius: "50%",
                border: "solid 2px #0ae5f5",
                objectFit: "cover"
              }}
            />
          ) : (
            <>
              <Input type="file" id="file" name="file" onChange={upload} />
              <Label htmlFor="file">
                <PlaceholderImg src="../img/add-user.svg" />
              </Label>
            </>
          )}
        </div>

        <div>Username</div>
        <input
          placeholder="Username"
          name="userName"
          value={newProfile.username}
          onChange={handleChange}
          error={errors.username}
        />
        {errors.userName && <StyledError>{errors.userName}</StyledError>}

        <div>E-Mail</div>
        <input
          placeholder="E-Mail"
          type="email"
          name="email"
          value={newProfile.email}
          onChange={handleChange}
        />
        <div>Password</div>
        <PasswordInput
          placeholder="Password"
          type="password"
          name="password"
          value={newProfile.password}
          onChange={handleChange}
          error={errors.password}
        />
        {errors.password && <StyledError>{errors.password}</StyledError>}
        <BlueButton text="Register now" type="submit" />
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
