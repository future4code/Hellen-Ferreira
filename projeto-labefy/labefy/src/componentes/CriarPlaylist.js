import React from "react";
import axios from "axios";
import styled, { withTheme } from "styled-components";

const HeaderHome = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(30, 215, 96, 0.2),
    rgba(30, 215, 96, 0.5),
    rgba(30, 215, 96, 0.7)
  );
  height: 15vh;
  background-color: #eeedee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 10vw;
`;

const ButtonHeader = styled.button`
  width: 8vw;
  height: 6vh;
  margin-right: 20px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-size: 17px;
  :hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

const MainPrincipal = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(30, 215, 96, 0.2),
    rgba(30, 215, 96, 0.5),
    rgba(30, 215, 96, 0.7)
  );
  height: 70vh;
  background-color: #eeedee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonEInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 30px;
`;

const InputGet = styled.input`
  margin-bottom: 40px;
  margin-top: 20px;
  width: 18vw;
  height: 4vh;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  background-color: transparent;

  ::placeholder {
    color: black;
  }
`;

const ButtonCriar = styled.button`
  width: 8vw;
  height: 6vh;
  margin-right: 20px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-size: 17px;
  :hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

const FooterHome = styled.footer`
  background-image: linear-gradient(
    to top,
    rgba(30, 215, 96, 0.2),
    rgba(30, 215, 96, 0.5),
    rgba(30, 215, 96, 0.7)
  );
  height: 15vh;
  background-color: #eeedee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class CriarPlaylist extends React.Component {
  state = {
    nome: "",
  };

  onChangeInputNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  postPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = { name: this.state.nome };
    axios
      .post(url, body, {
        headers: {
          Authorization: "hellen-ferreira-banu",
        },
      })
      .then((resposta) => {
        alert("Sua playlist foi criada com sucesso!");
        console.log(resposta);
        this.setState({ nome: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error.response.data);
      });
  };
  render() {
    return (
      <div>
        <HeaderHome>
          <ImgLogo src="/img/spotify-logo-preto.png" />
        </HeaderHome>
        <MainPrincipal>
          <ButtonEInput>
            <h3>Crie sua playlist:</h3>
            <InputGet
              placeholder="Nome da Playlist"
              value={this.state.nome}
              onChange={this.onChangeInputNome}
            />
            <Buttons>
              <ButtonCriar onClick={this.postPlaylist}>
                Criar playlist
              </ButtonCriar>
              <ButtonHeader onClick={this.props.irParaLista}>
                Playlists →
              </ButtonHeader>
            </Buttons>
          </ButtonEInput>
        </MainPrincipal>

        <FooterHome>
          <h3>By Hellen Barbosa</h3>
        </FooterHome>
      </div>
    );
  }
}

export default CriarPlaylist;
