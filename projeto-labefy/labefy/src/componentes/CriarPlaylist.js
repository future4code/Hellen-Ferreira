import React from "react";
import axios from "axios";
import styled, { withTheme } from "styled-components";

const HeaderHome = styled.div`
  height: 15vh;

  background-color: rgba(0, 0, 0, 1);
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
  border: 1px solid #1ed760;
  color: #1ed760;
  font-size: 15px;
  font-weight: bolder;
  :hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

const Body = styled.body`
  min-height: 100vh;
  background-image: url(img/colagem.jpg);
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: 1500px;
  background-attachment: fixed;
`;

const MainPrincipal = styled.div`
  min-height: 73vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eeeeee;
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
  color: #eeeeee;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #eeeeee;
  background-color: transparent;

  ::placeholder {
    color: #eeeeee;
  }
`;

const ButtonCriar = styled.button`
  width: 8vw;
  height: 6vh;
  margin-right: 20px;
  border-radius: 20px;
  background-color: #1ed760;
  border: none;
  color: black;
  font-size: 15px;
  font-weight: bolder;
  :hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

const FooterHome = styled.footer`
  height: 12vh;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  color: #eeeeee;
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
      <Body>
        <HeaderHome>
          <ImgLogo src="/img/spotify-logo.png" />
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
      </Body>
    );
  }
}

export default CriarPlaylist;
