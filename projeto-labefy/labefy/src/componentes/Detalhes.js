import axios from "axios";
import React from "react";
import styled from "styled-components";

const HeaderHome = styled.div`
  height: 15vh;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
`;

const Inputs = styled.input`
  margin-left: 20px;
  width: 10vw;
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

const Buttons = styled.button`
  width: 11vw;
  height: 6vh;
  margin-top: 40px;
  margin-left: 10px;
  margin-bottom: 40px;
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

const Buttons2 = styled.button`
  width: 11vw;
  height: 6vh;
  margin-top: 40px;
  margin-left: 10px;
  margin-bottom: 40px;
  border-radius: 20px;
  background-color: #1ed760;
  border: 1px solid #1ed760;
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
const MainPrincipal = styled.div`
  min-height: 73vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eeeeee;
`;

const Body = styled.body`
  min-height: 100vh;
  background-image: url(img/colagem.jpg);
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: 1500px;
  background-attachment: fixed;
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
  color: #eeeeee;
`;

const Audio = styled.div`
  width: 21%;
  height: 14%;
  padding: 15px;
  border-radius: 6px;
  background-color: #eee;
  box-shadow: 0px 0px 5px #eee;
  color: red;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TagAudio = styled.audio`
  width: 100%;
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
            <TagAudio controls src={p.url} />
          </Audio>
        </DivMusic>
      );
    });
    return (
      <Body>
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
            <Buttons2 onClick={this.postTrack}>Adicionar música</Buttons2>
            <Buttons onClick={this.props.voltaPagina}>Ver playlists</Buttons>
          </div>
        </HeaderHome>
        <MainPrincipal>{novoArray}</MainPrincipal>

        <FooterHome>
          <h3>By Hellen Barbosa</h3>
        </FooterHome>
      </Body>
    );
  }
}

export default Detalhes;
