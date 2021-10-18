import axios from "axios";
import React from "react";
import styled from "styled-components";

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
  justify-content: space-evenly;
  align-items: center;
`;

const Inputs = styled.input`
  margin-left: 20px;
  width: 10vw;
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

const Buttons = styled.button`
  width: 11vw;
  height: 6vh;
  margin-left: 20px;
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
const MainPrincipal = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(30, 215, 96, 0.2),
    rgba(30, 215, 96, 0.5),
    rgba(30, 215, 96, 0.7)
  );
  min-height: 70vh;
  background-color: #eeedee;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const DivMusic = styled.div`
  display: flex;
  align-items: center;
  width: 70vw;
  margin-top: 40px;
  padding-left: 10px;
  justify-content: space-evenly;
  background-image: transparent;
  height: 10vh;
  color: black;
`;

const Audio = styled.div`
  width: 20vw;
  color: rgba(30, 215, 96, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
class Detalhes extends React.Component {
  state = {
    nome: "",
    artist: "",
    url: "",
    listaDeMusica: [],
  };

  postTrack = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listMusic.id}/tracks`;
    const body = {
      name: this.state.nome,
      artist: this.state.artist,
      url: this.state.url,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "hellen-ferreira-banu",
        },
      })
      .then((resposta) => {
        alert("A música foi adicionada com sucesso!");
        console.log(resposta);
        this.setState({ nome: "", artist: "", url: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error.response.data);
      });
  };

  componentDidMount = () => {
    this.getTrack();
  };

  getTrack = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listMusic.id}/tracks`;
    axios
      .get(url, {
        headers: {
          Authorization: "hellen-ferreira-banu",
        },
      })
      .then((resposta) => {
        this.setState({ listaDeMusica: resposta.data.result.tracks });
        console.log(resposta);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangeInputNome = (e) => {
    this.setState({ nome: e.target.value });
  };
  onChangeInputArtista = (e) => {
    this.setState({ artist: e.target.value });
  };
  onChangeInputUrl = (e) => {
    this.setState({ url: e.target.value });
  };

  render() {
    const novoArray = this.state.listaDeMusica.map((p) => {
      return (
        <DivMusic>
          <h5>{p.name}</h5>
          <h5>{p.artist}</h5>
          <Audio>
            <audio controls src={p.url} />
          </Audio>
        </DivMusic>
      );
    });
    return (
      <div>
        <HeaderHome>
          <div>
            <Inputs
              placeholder="Nome da música"
              value={this.state.nome}
              onChange={this.onChangeInputNome}
            />
            <Inputs
              placeholder="Artista"
              value={this.state.artist}
              onChange={this.onChangeInputArtista}
            />
            <Inputs
              placeholder="URL da música"
              value={this.state.url}
              onChange={this.onChangeInputUrl}
            />
          </div>
          <div>
            <Buttons onClick={this.postTrack}>Adicionar música</Buttons>
            <Buttons onClick={this.props.voltaPagina}>Ver playlists</Buttons>
          </div>
        </HeaderHome>
        <MainPrincipal>{novoArray}</MainPrincipal>

        <FooterHome>
          <h3>By Hellen Barbosa</h3>
        </FooterHome>
      </div>
    );
  }
}

export default Detalhes;
