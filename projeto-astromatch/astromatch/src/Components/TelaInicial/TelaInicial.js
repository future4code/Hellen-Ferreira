import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constantes/Url";
import {
  Card,
  ImagemCard,
  CardText,
  CardBio,
  Body,
  ImagemButton,
  ImagemB,
  ImagemB2,
  ImagemLogo,
  Header,
  ButtonHeader,
} from "../../styled";
import Swal from "sweetalert2";

const TelaInicial = (props) => {
  const [profileList, setProfileList] = useState([]);

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then((response) => {
        setProfileList(response.data.profile);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  useEffect(() => {
    document.title = "Astromatch";
    getProfile();
  }, []);

  const choosePersonLike = () => {
    const body = {
      id: profileList.id,
      choice: true,
    };
    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((response) => {
        if (response.data.isMatch) {
          Swal.fire("", `${profileList.name} deu match`, "success");
        }
        getProfile();
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  const choosePersonDeslike = () => {
    const body = {
      id: profileList.id,
      choice: false,
    };
    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((response) => {
        getProfile();
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  return (
    <Body>
      <Card>
        <ImagemLogo src="/img/tinder-logo.png" />
        <ButtonHeader onClick={props.irParaTelaMatch}>
          <ImagemB2 src="/img/tinder-fogo.png" />
        </ButtonHeader>
        <hr />
        <ImagemCard src={profileList.photo} />
        <CardText>
          <h2>{profileList.name} </h2>
          <p>, {profileList.age}</p>
        </CardText>
        <CardBio>
          <p>{profileList.bio}</p>
        </CardBio>
        <hr />

        <ImagemButton onClick={choosePersonDeslike}>
          <ImagemB src="/img/dislike-icon.png" />
        </ImagemButton>
        <ImagemButton onClick={choosePersonLike}>
          <ImagemB src="/img/like-icon.png" />
        </ImagemButton>
      </Card>
    </Body>
  );
};

export default TelaInicial;
