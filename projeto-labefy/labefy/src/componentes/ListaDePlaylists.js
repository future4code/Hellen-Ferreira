import React from "react";
import axios from "axios";
import Detalhes from "./Detalhes";

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
        <div>
          <div key={p.id}>{p.name}</div>
          <button onClick={() => this.deletePlaylist(p.id)}>Deletar</button>
          <button onClick={() => this.trocaPagina(p)}>Detalhes</button>
        </div>
      );
    });
    console.log(listaPlaylist);
    return (
      <div>
        <button onClick={this.props.irParaCriarPlaylist}>Nova playlist</button>
        <p> oi, sou a lista de Playlists! </p>

        {listaPlaylist}
      </div>
    );
  }
}

export default ListaDePlaylists;
