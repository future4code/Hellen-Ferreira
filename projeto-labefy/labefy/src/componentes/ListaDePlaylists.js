import React from "react";
import axios from "axios";
import Detalhes from "./Detalhes";
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
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 10vw;
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
  justify-content: center;
  align-items: center;
`;

const ButtonNovaP = styled.button`
  width: 10vw;
  height: 6vh;
  margin-top: 40px;
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

const Buttons = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BotaoDelete = styled.button`
  width: 3vw;
  height: 4vh;
  margin-left: 10px;
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

const BotaoDetalhes = styled.button`
  width: 8vw;
  height: 4vh;
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
      <div>
        <HeaderHome>
          <ImgLogo src="/img/spotify-logo-preto.png" />
        </HeaderHome>
        <MainPrincipal>
          <h3>Aqui estão suas playlists!</h3>

          {listaPlaylist}

          <ButtonNovaP onClick={this.props.irParaCriarPlaylist}>
            Nova playlist
          </ButtonNovaP>
        </MainPrincipal>
        <FooterHome>
          <h3>By Hellen Barbosa</h3>
        </FooterHome>
      </div>
    );
  }
}

export default ListaDePlaylists;
