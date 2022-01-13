import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constantes/Url";
import {
  Body,
  CardPage2,
  ImagemB2,
  ImagemLogo,
  ButtonHeader,
  ImageCardMatch,
  CardMatch,
} from "../../styled";

const Match = (props) => {
  const [listaMatches, setListaMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((response) => {
        setListaMatches(response.data.matches);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  useEffect(() => {
    document.title = "Astromatch";
    getMatches();
  }, []);

  return (
    <Body>
      <CardMatch>
        <ImagemLogo src="/img/tinder-logo.png" />
        <ButtonHeader onClick={props.irParaTelaInicial}>
          <ImagemB2 src="/img/tinder-fogo.png" />
        </ButtonHeader>
        <hr />
        {listaMatches.map((match) => {
          return (
            <CardPage2>
              <ImageCardMatch src={match.photo} />
              <h4>{match.name}</h4>
            </CardPage2>
          );
        })}
      </CardMatch>
    </Body>
  );
};

export default Match;
