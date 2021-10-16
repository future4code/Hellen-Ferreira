import React from "react";
import axios from "axios";
import styled from "styled-components";

const HeaderHome = styled.div`
  height: 15vh;
  background-color: rgba(30, 215, 96, 0.5);
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
  margin-bottom: 200px;
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
const ImgMain = styled.img`
  width: 27vw;
  height: 60vh;
  border-radius: 400px;
`;

const MainPrincipal = styled.div`
  height: 100vh;
  background-color: #eeedee;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonEInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputGet = styled.input`
  margin-bottom: 10px;
  width: 18vw;
  height: 4vh;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  background-color: transparent;
`;

const ButtonCriar = styled.button`
  width: 8vw;
  height: 6vh;
  margin-left: 140px;
  margin-bottom: 10px;
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

const ImgEText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterHome = styled.footer`
  height: 15vh;
  background-color: rgba(30, 215, 96, 0.5);
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
          <ImgEText>
            <h3>Escutar muda tudo!</h3>
            <ImgMain src="/img/photo1.jpeg" />
            <h5>Ouça suas músicas preferidas!</h5>
          </ImgEText>
          <ButtonEInput>
            <ButtonHeader onClick={this.props.irParaLista}>
              Playlists →
            </ButtonHeader>
            <h3>Criar nova playlist:</h3>
            <InputGet
              placeholder="Nome da Playlist"
              value={this.state.nome}
              onChange={this.onChangeInputNome}
            />
            <ButtonCriar onClick={this.postPlaylist}>
              Criar playlist
            </ButtonCriar>
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
