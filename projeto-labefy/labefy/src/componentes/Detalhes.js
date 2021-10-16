import axios from "axios";
import React from "react";

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
        <div>
          {p.name} {p.artist} <audio controls src={p.url} />
        </div>
      );
    });
    return (
      <div>
        <input
          placeholder="Nome da música"
          value={this.state.nome}
          onChange={this.onChangeInputNome}
        />
        <input
          placeholder="Artista"
          value={this.state.artist}
          onChange={this.onChangeInputArtista}
        />
        <input
          placeholder="URL da música"
          value={this.state.url}
          onChange={this.onChangeInputUrl}
        />
        <button onClick={this.postTrack}>Adicionar música</button>
        <button onClick={this.props.voltaPagina}>Ver playlists</button>
        {novoArray}
      </div>
    );
  }
}

export default Detalhes;
