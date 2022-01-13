import React from "react";
import axios from "axios";
import Detalhes from "./Detalhes";
import styled from "styled-components";

const HeaderHome = styled.div`
  height: 15vh;

  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
`;

const ImgLogo = styled.img`
  width: 10vw;
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

const ButtonNovaP = styled.button`
  width: 10vw;
  height: 6vh;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #1ed760;
  color: #1ed760;
  font-size: 17px;
  font-weight: bolder;
  :hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

const Buttons = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BotaoDelete = styled.button`
  width: 2vw;
  height: 4vh;
  margin-left: 10px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #eeeeee;
  font-weight: lighter;
  color: #eeeeee;
  font-size: 15px;

  :hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

const BotaoDetalhes = styled.button`
  width: 6vw;
  height: 4vh;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #eeeeee;
  font-weight: lighter;
  color: #eeeeee;
  font-size: 15px;
  :hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

class ListaDePlaylists extends React.Component {
  state = {
    playlists: [],
    paginaDetalhes: false,
    listMusic: "",
  };

  componentDidMount = () => {
    this.getPlaylists();
  };
  getPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, {
        headers: {
          Authorization: "hellen-ferreira-banu",
        },
      })
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
        console.log(resposta);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deletePlaylist = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "hellen-ferreira-banu",
          },
        }
      )
      .then((resposta) => {
        this.getPlaylists();
        alert("A playlist foi deletada com sucesso!");
        console.log(resposta);
      })
      .catch((erro) => {
        alert("Ops, parece que algo deu errado...");
        console.log(erro);
      });
  };

  trocaPagina = (musicId) => {
    this.setState({ paginaDetalhes: true, listMusic: musicId });
  };

  voltaPagina = () => {
    this.setState({ paginaDetalhes: false });
  };

  render() {
    if (this.state.paginaDetalhes) {
      return (
        <Detalhes
          voltaPagina={this.voltaPagina}
          listMusic={this.state.listMusic}
        />
      );
    }

    const listaPlaylist = this.state.playlists.map((p) => {
      return (
        <Buttons>
          <h5 key={p.id}>{p.name}</h5>
          <div>
            <BotaoDetalhes onClick={() => this.trocaPagina(p)}>
              Detalhes
            </BotaoDetalhes>
            <BotaoDelete onClick={() => this.deletePlaylist(p.id)}>
              X
            </BotaoDelete>
          </div>
        </Buttons>
      );
    });
    console.log(listaPlaylist);
    return (
      <Body>
        <HeaderHome>
          <ImgLogo src="/img/spotify-logo.png" />
        </HeaderHome>
        <MainPrincipal>
          <h3>Aqui estão suas playlists!</h3>

          {listaPlaylist}

          <ButtonNovaP onClick={this.props.irParaCriarPlaylist}>
            Nova playlist
          </ButtonNovaP>
        </MainPrincipal>
        <FooterHome>
          <h4>By Hellen Barbosa</h4>
        </FooterHome>
      </Body>
    );
  }
}

export default ListaDePlaylists;
