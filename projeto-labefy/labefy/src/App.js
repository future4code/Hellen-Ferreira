import React from "react";
import CriarPlaylist from "./componentes/CriarPlaylist";
import ListaDePlaylists from "./componentes/ListaDePlaylists";

class App extends React.Component {
  state = {
    telaAtual: "criar",
  };

  onChangeTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
        return <CriarPlaylist irParaLista={this.irParaLista} />;
      case "lista":
        return (
          <ListaDePlaylists irParaCriarPlaylist={this.irParaCriarPlaylist} />
        );
      default:
        return <div>Error! Página não encontrada :(</div>;
    }
  };

  irParaCriarPlaylist = () => {
    this.setState({ telaAtual: "criar" });
  };

  irParaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return <div>{this.onChangeTela()} </div>;
  }
}

export default App;
